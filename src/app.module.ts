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
import {RouterModule} from "@nestjs/core";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    WiThrottleModule,
    WiThrottleMessagesModule,
    SerialModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController,SerialController],
  providers: [AppService, DirectoryService, SerialHandlerService],
})
export class AppModule {}
