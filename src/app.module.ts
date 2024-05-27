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
  ],
  controllers: [AppController,SerialController],
  providers: [AppService, DirectoryService, SerialHandlerService],
})
export class AppModule {}
