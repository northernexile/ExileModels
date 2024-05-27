import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { SerialPortDto } from './dto/serial/port/serial.port';
import { DirectoryItemDto } from './directory/dto/directory.item';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBearerAuth()
  @Get()
  @ApiResponse({
    status:200,
    description:"List of API routes",
    type:[DirectoryItemDto]
  })
  getServices(): DirectoryItemDto[] {
    return this.appService.getServices()
  }
}
