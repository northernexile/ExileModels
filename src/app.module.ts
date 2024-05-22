import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DevtoolsModule} from "@nestjs/devtools-integration";
import { WiThrottleModule } from './wi-throttle/wi-throttle.module';
import { WiThrottleMessagesModule } from './wi-throttle-messages/wi-throttle-messages.module';
import { DirectoryService } from './directory/directory.service';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    WiThrottleModule,
    WiThrottleMessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, DirectoryService],
})
export class AppModule {}
