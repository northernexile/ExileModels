import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../dto/user/create.user';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { matchPassword } from './password.hash';
import { RolesService } from '../roles/roles.service';
import { UsersRolesService } from '../users/roles/users.roles.service';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private rolesService: RolesService,
    private userRolesService: UsersRolesService,
    private jwtService: JwtService
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
}
