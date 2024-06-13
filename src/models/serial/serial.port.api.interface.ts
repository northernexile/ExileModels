import { SerialPortResponseInterface } from "./serial.port.response.interface";

export interface SerialPortApiInterface {
    list: (cancel:boolean) => Promise<SerialPortResponseInterface>
} 