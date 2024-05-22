import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WiThrottleService } from './wi-throttle/wi-throttle.service';
import { WiThrottleMessageController } from './wi-throttle-message/wi-throttle-message.controller';
import { WiThrottleModule } from './wi-throttle/wi-throttle.module';
import { WiThrottleMessagesModule } from './wi-throttle-messages/wi-throttle-messages.module';

@Module({
  imports: [WiThrottleModule, WiThrottleMessagesModule],
  controllers: [AppController, WiThrottleMessageController],
  providers: [AppService, WiThrottleService],
})
export class AppModule {}
