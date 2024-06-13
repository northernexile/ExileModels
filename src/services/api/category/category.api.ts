
import { CategoryApiInterface } from "../../../models/category/category.api.interface";
import { CategoryInterface } from "../../../models/category/category.interface";
import { CategoryResponseInterface } from "../../../models/category/category.response.interface";
import { api } from "../config/axios.config";
import { defineCancelApiObject } from "../config/define.cancel.api.object";
const verb:string = '/categories';

const CategoryApi:CategoryApiInterface = {
    

    list: async function (cancel: boolean): Promise<CategoryResponseInterface> {
        const uri:string = [verb,'/list'].join()
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    find: async function (roleId: number, cancel: boolean): Promise<CategoryResponseInterface> {
        const uri:string = [verb,'list',roleId].join('/')
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.find.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    create: async function (payload: CategoryInterface,cancel:boolean): Promise<CategoryResponseInterface> {
        const uri:string = verb;        
        const response:any = await api.request({
            url: uri,
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    update: async function (roleId: number, payload: CategoryInterface, cancel: boolean): Promise<CategoryResponseInterface> {
        const uri:string = [verb,roleId].join('/')        
        const response:any = await api.request({
            url: uri,
            method: "PATCH",
            data: payload,
            signal: cancel ? cancelApiObject[this.update.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    remove: async function (roleId: number, cancel: boolean): Promise<CategoryResponseInterface> {
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

const cancelApiObject:any = defineCancelApiObject(CategoryApi)