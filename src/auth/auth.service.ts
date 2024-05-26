import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../dto/user/create.user';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { matchPassword,hashPassword } from './password.hash';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService,
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
    try {
      return this.usersService.create(payload)
    } catch (err) {
      throw new UnauthorizedException(err)
    }
  }
}
