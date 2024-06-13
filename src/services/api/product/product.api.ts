import { ProductApiInterface } from "../../../models/product/product.api.interface";
import { ProductInterface } from "../../../models/product/product.interface";
import { ProductResponseInterface } from "../../../models/product/product.response.interface";
import { api } from "../config/axios.config";
import { defineCancelApiObject } from "../config/define.cancel.api.object";
const verb:string = '/products';

const ProductApi:ProductApiInterface = {
    

    list: async function (cancel: boolean): Promise<ProductResponseInterface> {
        const uri:string = [verb,'/list'].join()
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.list.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    find: async function (productId: number, cancel: boolean): Promise<ProductResponseInterface> {
        const uri:string = [verb,'list',productId].join('/')
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.find.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    create: async function (payload: ProductInterface,cancel:boolean): Promise<ProductResponseInterface> {
        const uri:string = verb;        
        const response:any = await api.request({
            url: uri,
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    update: async function (productId: number, payload: ProductInterface, cancel: boolean): Promise<ProductResponseInterface> {
        const uri:string = [verb,productId].join('/')        
        const response:any = await api.request({
            url: uri,
            method: "PATCH",
            data: payload,
            signal: cancel ? cancelApiObject[this.update.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    remove: async function (productId: number, cancel: boolean): Promise<ProductResponseInterface> {
        const uri:string = [verb,productId].join('/')      
        const response:any = await api.request({
            url: uri,
            method: "DELETE",
            data: {},
            signal: cancel ? cancelApiObject[this.remove.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(ProductApi)