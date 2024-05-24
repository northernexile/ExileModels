import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import {jwtConstants} from './constants';
import {APP_GUARD} from '@nestjs/core';
import {AuthGuard} from './auth.guard'
import {UserEntity} from '../entities/user.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports:[
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide:APP_GUARD,
      useClass:AuthGuard
    },
    AuthService
  ]
})
export class AuthModule {}
