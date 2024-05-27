import {
  HttpCode, HttpStatus,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/user/create.user';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { matchPassword } from './password.hash';
import { RolesService } from '../roles/roles.service';
import { UsersRolesService } from '../users/roles/users.roles.service';
import { ForgottenUserDto } from '../dto/auth/forgotten.user';
import { UserEntity } from '../entities/user.entity';
import * as process from 'node:process';
import { ForgottenPasswordTemplateDto } from '../dto/auth/email/forgotten.password.template';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private rolesService: RolesService,
    private userRolesService: UsersRolesService,
    private jwtService: JwtService,
    private mailService: MailService
  ) {}
  async signIn(email :string, password:string) {
    const user = await this.usersService.findOneBy(email);

    if(!user?.password) {
      throw new UnauthorizedException('not found')
    }

    const passwordIsCorrect = matchPassword(password,user?.password)

    if (!passwordIsCorrect) {
      throw new UnauthorizedException('no match')
    }

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(payload: CreateUserDto) {
    const user = await this.usersService.findOneBy(payload.email);

    if (user) {
      throw new UnauthorizedException('Already registered')
    }
    try {
      const savedUser = await this.usersService.create(payload)
      if (savedUser) {
        const guestRole = await this.rolesService.getGuestRole()
        if (guestRole) {
          await this.userRolesService.create({
            userId:savedUser.id,
            roleId:guestRole.id,
            createdAt:new Date()
          })
        }
      }

      return savedUser
    } catch (err) {
      throw new UnauthorizedException(err)
    }
  }

  async forgottenPassword(payload:ForgottenUserDto) {
    const user = await this.usersService.findOneBy(payload.email)
    if (!user) {
      throw new NotFoundException('User not found.')
    }

    const token = this.createToken({id:user.id,email:user.email},user)
    const link = `${process.env.PROTOCOL}://${process.env.BASE_URL}/auth/reset/${user.id}/${token}`;
    const template:ForgottenPasswordTemplateDto = {
      email:user.email,
      name:user.username,
      link:link
    }

    if( await this.mailService.sendPasswordResetEmail(template)) {
      return true
    }
    throw new ServiceUnavailableException({
      code:HttpStatus.SERVICE_UNAVAILABLE,message:'Service unavailable'
    })
  }

  createToken(payload:object,user:UserEntity) {
    return this.jwtService.sign(payload,{
      secret:JSON.stringify({
        secret:process.env.JWT_SECRET,
        updatedAt:user.updatedAt ?? ''
      })
    })
  }
}
