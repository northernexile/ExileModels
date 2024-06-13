import { SerialPortInterface } from "./serial.port.interface"

export interface SerialPortResponseInterface  {
    code: number,
    message: string
    data: SerialPortInterface[] | SerialPortInterface | undefined
}