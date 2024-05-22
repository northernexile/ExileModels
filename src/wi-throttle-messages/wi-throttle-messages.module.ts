import { Module } from '@nestjs/common';
import { WiThrottleMessagesService } from './wi-throttle-messages.service';
import { WiThrottleMessagesController } from './wi-throttle-messages.controller';

@Module({
  controllers: [WiThrottleMessagesController],
  providers: [WiThrottleMessagesService],
})
export class WiThrottleMessagesModule {}
