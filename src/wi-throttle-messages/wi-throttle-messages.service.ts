import { Injectable } from '@nestjs/common';
import { CreateWiThrottleMessageDto } from './dto/create-wi-throttle-message.dto';
import { UpdateWiThrottleMessageDto } from './dto/update-wi-throttle-message.dto';

@Injectable()
export class WiThrottleMessagesService {
  create(createWiThrottleMessageDto: CreateWiThrottleMessageDto) {
    return 'This action adds a new wiThrottleMessage';
  }

  findAll() {
    return `This action returns all wiThrottleMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wiThrottleMessage`;
  }

  update(id: number, updateWiThrottleMessageDto: UpdateWiThrottleMessageDto) {
    return `This action updates a #${id} wiThrottleMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} wiThrottleMessage`;
  }
}
