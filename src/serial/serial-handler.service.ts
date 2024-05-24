import {SerialPort} from 'serialport';
import {Injectable} from "@nestjs/common";
@Injectable()
export class SerialHandlerService  {
    getPortList() {
        let portList:any[] = []

        return SerialPort.list().then((ports)=>{
            ports.forEach((port) => {
                portList.push(port)
            })

            return portList
        })
    }
}

