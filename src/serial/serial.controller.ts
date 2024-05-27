import {Controller, Dependencies, Get} from '@nestjs/common';
import {SerialHandlerService} from "./serial-handler.service";
import {MessagePattern} from "@nestjs/microservices";
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('serial')
@Dependencies(SerialHandlerService)
export class SerialController {
    constructor(private readonly serialHandlerService: SerialHandlerService) {
        this.serialHandlerService = serialHandlerService
    }

    @Get()
    @ApiBearerAuth()
    async getSerial() {
        return await this.serialHandlerService.getPortList()
    }
}
