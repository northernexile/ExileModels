import {SerialPort} from 'serialport';
import {Injectable} from "@nestjs/common";
import { SerialPortDto } from '../dto/serial/port/serial.port';
@Injectable()
export class SerialHandlerService  {
    getPortList() {
        let portList:SerialPortDto[] = []

        return SerialPort.list().then((ports)=>{
            ports.forEach((port) => {
                portList.push( {
                    manufacturer: port.manufacturer ?? '',
                    path: port.path ?? '',
                    pnpId: port.pnpId ?? '',
                    productId: port.productId ?? '',
                    serialNumber: port.serialNumber ?? '',
                    vendorId: port.vendorId ?? ''
                })
            })

            return portList
        })
    }
}

