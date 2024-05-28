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
import * as process from 'node:process';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RolesModule } from '../roles/roles.module';
import { UsersRolesModule } from '../users/roles/users.roles.module';
import { MailModule } from '../mail/mail.module';
import { MailService } from '../mail/mail.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    UsersModule,
    RolesModule,
    UsersRolesModule,
    JwtModule.registerAsync({
      imports: [
        ConfigModule,
        MailModule
      ],
      useFactory: async (configService: ConfigService) => ({
        global:true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide:APP_GUARD,
      useClass:AuthGuard
    },
    AuthService,
    MailService,
    JwtStrategy
  ]
})
export class AuthModule {}
