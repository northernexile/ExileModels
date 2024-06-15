import { ApiResponseInterface } from "../../../models/api.response.interface"
import { CreateUserInterface } from "../../../models/user/create.user.interface"
import { FindUserResponseInterface } from "../../../models/user/find.user.response"
import { UpdateUserInterface } from "../../../models/user/update.user.interface"
import { UserApiInterface } from "../../../models/user/user.api.interface"
import { UserListResponseInterface } from "../../../models/user/user.list.interface.response"
import { apiSecure } from "../config/axios.secure.config"
import { defineCancelApiObject } from "../config/define.cancel.api.object"


export const UserApi:UserApiInterface = {
    list: async function (cancel: boolean): Promise<UserListResponseInterface> {
        const uri:string = '/users/list'
        const response:any = await apiSecure.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    find: async function (userId: number, cancel: boolean): Promise<FindUserResponseInterface> {
        const uri:string = ['/users/list',userId].join('/')
        const response:any = await apiSecure.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.find.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    create: async function (payload: CreateUserInterface, cancel: boolean): Promise<FindUserResponseInterface> {
        const uri:string = '/users'        
        const response:any = await apiSecure.request({
            url: uri,
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    update: async function (userId: number, payload: UpdateUserInterface, cancel: boolean): Promise<FindUserResponseInterface> {
        const uri:string = ['/users',userId].join('/')        
        const response:any = await apiSecure.request({
            url: uri,
            method: "PATCH",
            data: payload,
            signal: cancel ? cancelApiObject[this.update.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    remove: async function (userId: number, cancel: boolean): Promise<ApiResponseInterface> {
        const uri:string = ['/users',userId].join('/')      
        const response:any = await apiSecure.request({
            url: uri,
            method: "DELETE",
            data: {},
            signal: cancel ? cancelApiObject[this.remove.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(UserApi)