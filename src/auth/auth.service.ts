import {
  ConflictException,
  ForbiddenException,
  HttpCode, HttpStatus,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/user/create.user';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hashPassword, matchPassword } from './password.hash';
import { RolesService } from '../roles/roles.service';
import { UsersRolesService } from '../users/roles/users.roles.service';
import { ForgottenUserDto } from '../dto/auth/forgotten.user';
import { UserEntity } from '../entities/user.entity';
import * as process from 'node:process';
import { ForgottenPasswordTemplateDto } from '../dto/auth/email/forgotten.password.template';
import { MailService } from '../mail/mail.service';
import { ResetEmailSentDto } from '../dto/auth/email/reset.email.sent';
import { ResetUserPasswordDto } from '../dto/auth/reset.user.password';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WelcomeEmailDto } from '../dto/auth/email/welcome.email';
import UpdatedResponse from '../services/responses/updated.response';
import SuccessResponse from '../services/responses/success.response';
import CreatedResponse from '../services/responses/created.response';
import { VerifiedEmailDto } from '../dto/auth/email/verified.email';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    private usersService: UsersService,
    private rolesService: RolesService,
    private userRolesService: UsersRolesService,
    private jwtService: JwtService,
    private mailService: MailService
  ) {}

  private async checkUserAndToken(userId:number,token:string) {
    const user = await this.usersService.findOneById(userId)

    if(!user) {
      throw new NotFoundException({code:HttpStatus.NOT_FOUND,message:'User not found'})
    }

    try {
      const secret = JSON.stringify({
        secret: process.env.JWT_SECRET,
        updatedAt: user.updatedAt,
      });
      this.jwtService.verify(token, {
        secret,
      });
    } catch (err) {
      throw new ForbiddenException({code:HttpStatus.FORBIDDEN,message:'Token expired/invalid'})
    }

    return user
  }
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
    const token = await this.jwtService.signAsync(payload);

    if(! token) {
      throw new ServiceUnavailableException({
        code:HttpStatus.SERVICE_UNAVAILABLE,
        message:'Could not create access token'
      })
    }
    const userData = {
      access_token:token,
      user: {
        id:user.id,
        email:user.email,
        name:user.username,
        roles:[]
      }
    }

    return SuccessResponse('User authenticate',userData)
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

          const token = this.createToken({id:savedUser.id,email:savedUser.email},savedUser)
          const link = `${process.env.PROTOCOL}://${process.env.FRONT}/user/verify/${savedUser.id}/${token}`;

          const verification : WelcomeEmailDto = {
            name:savedUser.username,
            email:savedUser.email,
            link:link
          }

          if (await this.mailService.sendVerificationEmail(verification)) {
            return CreatedResponse(
              'Please check your email for a verification email to complete your registration',
              {
                name:savedUser.username,
                id:savedUser.id,
                email:savedUser.email
              }
            )
          }
        }
      }
    } catch (err) {
      throw new UnauthorizedException(err)
    }
  }

  async forgottenPassword(payload:ForgottenUserDto):Promise<ResetEmailSentDto> {
    const user = await this.usersService.findOneBy(payload.email)
    if (!user) {
      throw new NotFoundException('User not found.')
    }

    const token = this.createToken({id:user.id,email:user.email},user)
    const link = `${process.env.PROTOCOL}://${process.env.FRONT}/password/reset/${user.id}/${token}`;
    const template:ForgottenPasswordTemplateDto = {
      email:user.email,
      name:user.username,
      link:link
    }

    if( await this.mailService.sendPasswordResetEmail(template)) {
      return  {
        email:user.email,
        message:'Check your inbox for a reset email'
      }
    }
    throw new ServiceUnavailableException({
      code:HttpStatus.SERVICE_UNAVAILABLE,message:'Service unavailable'
    })
  }

  async resetPassword(userId:number,token:string,payload:ResetUserPasswordDto) {
    const user = await this.checkUserAndToken(userId,token)
    const hashedPassword = hashPassword(payload.password)
    const newUser = this.userRepository.create({password:hashedPassword,updatedAt: new Date()})
    if (! await this.userRepository.update(user.id,newUser)) {
      throw new ServiceUnavailableException({code:HttpStatus.SERVICE_UNAVAILABLE,message:'Service unavailable'})
    }

    return UpdatedResponse('Password Updated')
  }

  async verify(userId:number,token:string) {
    const user = await this.checkUserAndToken(userId,token)
    const dateTime = new Date()
    const newUser = this.userRepository.create({createdAt:dateTime,updatedAt:dateTime})
    if (! await this.userRepository.update(user.id,newUser)) {
      throw new ServiceUnavailableException({code:HttpStatus.SERVICE_UNAVAILABLE,message:'Service unavailable'})
    }

    const verifiedData:VerifiedEmailDto = {
      name:user.username,
      email:user.email
    }

    if (!await this.mailService.sendVerifiedEmail(verifiedData)) {
      throw new ServiceUnavailableException({
        code:HttpStatus.SERVICE_UNAVAILABLE,
        message:'Service Unavailable'
      })
    }

    return UpdatedResponse('User email verified.')
  }
  createToken(payload:object,user:UserEntity) {
    return this.jwtService.sign(payload,{
      secret:JSON.stringify({
        secret:process.env.JWT_SECRET,
        updatedAt:user.updatedAt ?? '',
      })
    })
  }
}
