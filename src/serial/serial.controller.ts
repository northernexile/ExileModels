import { Controller, Dependencies, Get, Req, UseGuards } from '@nestjs/common';
import { SerialHandlerService } from './serial-handler.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SerialPortDto } from '../dto/serial/port/serial.port';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { RoleGuard } from '../auth/role/role.guard';

@Controller('serial')
@Dependencies(SerialHandlerService)
export class SerialController {
  constructor(private readonly serialHandlerService: SerialHandlerService) {
    this.serialHandlerService = serialHandlerService;
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'List of Serial ports',
    type: [SerialPortDto],
  })
  @Roles('Admin', 'Guest')
  @ApiOperation({ summary: 'List serial ports' })
  async getSerial() {
    return await this.serialHandlerService.getPortList();
  }
}
