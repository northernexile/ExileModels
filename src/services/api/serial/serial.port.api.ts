import { SerialPortApiInterface } from "../../../models/serial/serial.port.api.interface";
import { SerialPortResponseInterface } from "../../../models/serial/serial.port.response.interface";
import { api } from "../config/axios.config";
import { defineCancelApiObject } from "../config/define.cancel.api.object";

const verb ='/serial';

const SerialPortApi:SerialPortApiInterface = {
    list: async function (cancel: boolean): Promise<SerialPortResponseInterface> {
        const uri:string = [verb].join()
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
}

const cancelApiObject:any = defineCancelApiObject(SerialPortApi)