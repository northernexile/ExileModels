import { ScaleApiInterface } from "../../../models/scale/scale.api.interface";
import { ScaleInterface } from "../../../models/scale/scale.interface";
import { ScaleResponseInterface } from "../../../models/scale/scale.reponse.interface";
import { api } from "../config/axios.config";
import { defineCancelApiObject } from "../config/define.cancel.api.object";
const verb:string = '/scales';

const ScaleApi:ScaleApiInterface = {
    

    list: async function (cancel: boolean): Promise<ScaleResponseInterface> {
        const uri:string = [verb,'/list'].join()
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    find: async function (scaleId: number, cancel: boolean): Promise<ScaleResponseInterface> {
        const uri:string = [verb,'list',scaleId].join('/')
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.find.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    create: async function (payload: ScaleInterface,cancel:boolean): Promise<ScaleResponseInterface> {
        const uri:string = verb;        
        const response:any = await api.request({
            url: uri,
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    update: async function (scaleId: number, payload: ScaleInterface, cancel: boolean): Promise<ScaleResponseInterface> {
        const uri:string = [verb,scaleId].join('/')        
        const response:any = await api.request({
            url: uri,
            method: "PATCH",
            data: payload,
            signal: cancel ? cancelApiObject[this.update.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    remove: async function (scaleId: number, cancel: boolean): Promise<ScaleResponseInterface> {
        const uri:string = [verb,scaleId].join('/')      
        const response:any = await api.request({
            url: uri,
            method: "DELETE",
            data: {},
            signal: cancel ? cancelApiObject[this.remove.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(ScaleApi)