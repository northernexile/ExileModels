import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WiThrottleMessagesService } from './wi-throttle-messages.service';
import { CreateWiThrottleMessageDto } from './dto/create-wi-throttle-message.dto';
import { UpdateWiThrottleMessageDto } from './dto/update-wi-throttle-message.dto';

@Controller()
export class WiThrottleMessagesController {
  constructor(private readonly wiThrottleMessagesService: WiThrottleMessagesService) {}

  @MessagePattern('createWiThrottleMessage')
  create(@Payload() createWiThrottleMessageDto: CreateWiThrottleMessageDto) {
    return this.wiThrottleMessagesService.create(createWiThrottleMessageDto);
  }

  @MessagePattern('findAllWiThrottleMessages')
  findAll() {
    return this.wiThrottleMessagesService.findAll();
  }

  @MessagePattern('findOneWiThrottleMessage')
  findOne(@Payload() id: number) {
    return this.wiThrottleMessagesService.findOne(id);
  }

  @MessagePattern('updateWiThrottleMessage')
  update(@Payload() updateWiThrottleMessageDto: UpdateWiThrottleMessageDto) {
    return this.wiThrottleMessagesService.update(updateWiThrottleMessageDto.id, updateWiThrottleMessageDto);
  }

  @MessagePattern('removeWiThrottleMessage')
  remove(@Payload() id: number) {
    return this.wiThrottleMessagesService.remove(id);
  }
}
