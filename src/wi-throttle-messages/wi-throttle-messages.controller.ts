import { Controller, Dependencies } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WiThrottleMessagesService } from './wi-throttle-messages.service';
import { CreateWiThrottleMessageDto } from './dto/create-wi-throttle-message.dto';
import { UpdateWiThrottleMessageDto } from './dto/update-wi-throttle-message.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
@Dependencies(WiThrottleMessagesService)
export class WiThrottleMessagesController {
  constructor(
    private readonly wiThrottleMessagesService: WiThrottleMessagesService,
  ) {
    this.wiThrottleMessagesService = wiThrottleMessagesService;
  }

  @MessagePattern('createWiThrottleMessage')
  @ApiOperation({ summary: 'Create throttle message' })
  create(@Payload() createWiThrottleMessageDto: CreateWiThrottleMessageDto) {
    return this.wiThrottleMessagesService.create(createWiThrottleMessageDto);
  }

  @MessagePattern('findAllWiThrottleMessages')
  @ApiOperation({ summary: 'List all throttle messages' })
  findAll() {
    return this.wiThrottleMessagesService.findAll();
  }

  @MessagePattern('findOneWiThrottleMessage')
  @ApiOperation({ summary: 'Find a specific throttle message' })
  findOne(@Payload() id: number) {
    return this.wiThrottleMessagesService.findOne(id);
  }

  @MessagePattern('updateWiThrottleMessage')
  @ApiOperation({ summary: 'Update throttle message' })
  update(@Payload() updateWiThrottleMessageDto: UpdateWiThrottleMessageDto) {
    return this.wiThrottleMessagesService.update(
      updateWiThrottleMessageDto.id,
      updateWiThrottleMessageDto,
    );
  }

  @MessagePattern('removeWiThrottleMessage')
  @ApiOperation({ summary: 'Delete throttle message' })
  remove(@Payload() id: number) {
    return this.wiThrottleMessagesService.remove(id);
  }
}
