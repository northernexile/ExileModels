import { Controller, Dependencies, Get, UseGuards } from '@nestjs/common';
import {SerialHandlerService} from "./serial-handler.service";
import {MessagePattern} from "@nestjs/microservices";
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { SerialPortDto } from '../dto/serial/port/serial.port';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { Roles } from '../auth/roles/roles.decorator';

@Controller('serial')
@Dependencies(SerialHandlerService)
export class SerialController {
    constructor(private readonly serialHandlerService: SerialHandlerService) {
        this.serialHandlerService = serialHandlerService
    }

    @Get()
    @ApiBearerAuth()
    @ApiResponse({
        status:200,
        description:"List of Serial ports",
        type:[SerialPortDto]
    })
    //@Roles('Admin')
    @UseGuards(JwtAuthGuard)
    async getSerial() {
        return await this.serialHandlerService.getPortList()
    }
}
