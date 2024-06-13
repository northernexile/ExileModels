import { UserRoleApiInteface } from "../../../../models/user/role/user.role.api.interface"
import { UserRoleResponseInterface } from "../../../../models/user/role/user.role.response.interface"
import { api } from "../../config/axios.config";

const UserRoleApi:UserRoleApiInteface = {
    list: async function (userId: number, cancel:boolean): Promise<UserRoleResponseInterface> {
        const uri = ['/user','roles',userId].join('/')
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    add: async function (userId: number, roleId: number, cancel: boolean): Promise<UserRoleResponseInterface> {
        const uri = ['/user','roles',userId,'role',roleId,'add'].join('/')
        const response:any = await api.request({
            url: uri,
            method: "PATCH",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    remove: async function (userId: number, roleId: number, cancel:boolean): Promise<UserRoleResponseInterface> {
        const uri = ['/user','roles',userId,'role',roleId,'delete'].join('/')
        const response:any = await api.request({
            url: uri,
            method: "DELETE",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(UserRoleApi)