import {Controller, Dependencies, Get} from '@nestjs/common';
import {SerialHandlerService} from "./serial-handler.service";
import {MessagePattern} from "@nestjs/microservices";

@Controller('serial')
@Dependencies(SerialHandlerService)
export class SerialController {
    constructor(private readonly serialHandlerService: SerialHandlerService) {
        this.serialHandlerService = serialHandlerService
    }

    @Get()
    async getSerial() {
        return await this.serialHandlerService.getPortList()
    }
}
