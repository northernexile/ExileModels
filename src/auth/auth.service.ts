import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user/create.user';

@Injectable()
export class AuthService {
  async signIn(email :string, password:string) {

  }

  async signUp(payload: CreateUserDto) {

  }
}
