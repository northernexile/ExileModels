import { Module } from '@nestjs/common';
import { SerialHandlerService } from './serial-handler.service';
import { SerialController } from './serial.controller';

@Module({
  providers: [SerialHandlerService],
  controllers: [SerialController],
})
export class SerialModule {}
