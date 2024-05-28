import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DevtoolsModule} from "@nestjs/devtools-integration";
import { WiThrottleModule } from './wi-throttle/wi-throttle.module';
import { WiThrottleMessagesModule } from './wi-throttle-messages/wi-throttle-messages.module';
import { DirectoryService } from './directory/directory.service';
import { SerialModule } from './serial/serial.module';
import { SerialHandlerService } from './serial/serial-handler.service';
import {SerialController} from "./serial/serial.controller";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UsersRolesModule } from './users/roles/users.roles.module';
import { MailModule } from './mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'node:process';
import { JwtStrategy } from './auth/jwt.strategy';
import { RoleGuard } from './auth/role/role.guard';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    WiThrottleModule,
    WiThrottleMessagesModule,
    SerialModule,
    AuthModule,
    UsersModule,
    RolesModule,
    UsersRolesModule,
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: true,
        synchronize: false,
        migrationsTableName: 'typeorm_migrations',
        migrationsRun: false,
      }),
      inject: [ConfigService],
    }),
    MailModule,
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
    })
  ],
  controllers: [AppController,SerialController, UsersController],
  providers: [AppService, DirectoryService, SerialHandlerService,JwtStrategy,RoleGuard],
})
export class AppModule {}
