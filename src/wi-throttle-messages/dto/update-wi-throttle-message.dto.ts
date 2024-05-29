import { PartialType } from '@nestjs/mapped-types';
import { CreateWiThrottleMessageDto } from './create-wi-throttle-message.dto';

export class UpdateWiThrottleMessageDto extends PartialType(
  CreateWiThrottleMessageDto,
) {
  id: number;
}
