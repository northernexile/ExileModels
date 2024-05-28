import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { SerialPortDto } from './dto/serial/port/serial.port';
import { DirectoryItemDto } from './directory/dto/directory.item';
import { JwtAuthGuard } from './auth/jwt.guard';

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
  @UseGuards(JwtAuthGuard)
  getServices(): DirectoryItemDto[] {
    return this.appService.getServices()
  }
}
