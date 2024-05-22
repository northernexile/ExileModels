import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WiThrottleMessagesService } from './wi-throttle-messages.service';
import { CreateWiThrottleMessageDto } from './dto/create-wi-throttle-message.dto';
import { UpdateWiThrottleMessageDto } from './dto/update-wi-throttle-message.dto';

@Controller('wi-throttle-messages')
export class WiThrottleMessagesController {
  constructor(private readonly wiThrottleMessagesService: WiThrottleMessagesService) {}

  @Post()
  create(@Body() createWiThrottleMessageDto: CreateWiThrottleMessageDto) {
    return this.wiThrottleMessagesService.create(createWiThrottleMessageDto);
  }

  @Get()
  findAll() {
    return this.wiThrottleMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wiThrottleMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWiThrottleMessageDto: UpdateWiThrottleMessageDto) {
    return this.wiThrottleMessagesService.update(+id, updateWiThrottleMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wiThrottleMessagesService.remove(+id);
  }
}
