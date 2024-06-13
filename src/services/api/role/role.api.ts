import { RoleApiInterface } from "../../../models/role/role.api.interface";
import { RoleInterface } from "../../../models/role/role.interface";
import { RoleResponseInterface } from "../../../models/role/role.response.interface";
import { api } from "../config/axios.config";
import { defineCancelApiObject } from "../config/define.cancel.api.object";
const verb:string = '/roles';

const RoleApi:RoleApiInterface = {
    

    list: async function (cancel: boolean): Promise<RoleResponseInterface> {
        const uri:string = [verb,'/list'].join()
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    find: async function (roleId: number, cancel: boolean): Promise<RoleResponseInterface> {
        const uri:string = [verb,'list',roleId].join('/')
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.find.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    create: async function (payload: RoleInterface,cancel:boolean): Promise<RoleResponseInterface> {
        const uri:string = verb;        
        const response:any = await api.request({
            url: uri,
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    update: async function (roleId: number, payload: RoleInterface, cancel: boolean): Promise<RoleResponseInterface> {
        const uri:string = [verb,roleId].join('/')        
        const response:any = await api.request({
            url: uri,
            method: "PATCH",
            data: payload,
            signal: cancel ? cancelApiObject[this.update.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    remove: async function (roleId: number, cancel: boolean): Promise<RoleResponseInterface> {
        const uri:string = [verb,roleId].join('/')      
        const response:any = await api.request({
            url: uri,
            method: "DELETE",
            data: {},
            signal: cancel ? cancelApiObject[this.remove.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(RoleApi)