import { Injectable } from '@nestjs/common';

@Injectable()
export class WiThrottleService {
    private serialMessages: any[];
    constructor() {
        this.serialMessages = []
    }

    create(message:string) {
        this.serialMessages.push(message)
    }

    findAll() {
        return this.serialMessages
    }
}
