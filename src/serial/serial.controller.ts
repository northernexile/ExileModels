import {Controller, Dependencies, Get} from '@nestjs/common';
import {SerialHandlerService} from "./serial-handler.service";
import {MessagePattern} from "@nestjs/microservices";
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { SerialPortDto } from '../dto/serial/port/serial.port';

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
    async getSerial() {
        return await this.serialHandlerService.getPortList()
    }
}
