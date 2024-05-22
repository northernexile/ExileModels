import { Module } from '@nestjs/common';
import { WiThrottleMessage} from "../wi-throttle-messages/entities/wi-throttle-message.entity";

@Module({
    controllers:[WiThrottleMessage]
})
export class WiThrottleModule {

}
