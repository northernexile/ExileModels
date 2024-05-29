import { Module } from '@nestjs/common';
import { WiThrottleMessagesController } from '../wi-throttle-messages/wi-throttle-messages.controller';
import { WiThrottleMessagesService } from '../wi-throttle-messages/wi-throttle-messages.service';

@Module({
  controllers: [WiThrottleMessagesController],
  providers: [WiThrottleMessagesService],
})
export class WiThrottleModule {}
