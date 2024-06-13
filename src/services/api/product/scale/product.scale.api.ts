import { ProductScaleApiInterface } from "../../../../models/product/scale/product.scale.api.interface";
import { ProductScaleInterface } from "../../../../models/product/scale/product.scale.interface";
import { ProductScaleResponseInterface } from "../../../../models/product/scale/product.scale.response.interface";
import { api } from "../../config/axios.config";
import { defineCancelApiObject } from "../../config/define.cancel.api.object";


const ProductScaleApi:ProductScaleApiInterface = {
    list: async function (cancel: boolean): Promise<ProductScaleResponseInterface> {
        const uri = ['/product','categories'].join('/')
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.find.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    create: async function (payload: ProductScaleInterface, cancel: boolean): Promise<ProductScaleResponseInterface> {
        const uri = ['/product','categories'].join('/')
        const response:any = await api.request({
            url: uri,
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    find: async function (id: number, cancel: boolean): Promise<ProductScaleResponseInterface> {
        const uri = ['/product','categories',id].join('/')
        const response:any = await api.request({
            url: uri,
            method: "GET",
            data: {},
            signal: cancel ? cancelApiObject[this.find.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    update: async function (id: number,payload:ProductScaleInterface, cancel: boolean): Promise<ProductScaleResponseInterface> {
        const uri = ['/product','categories',id].join('/')
        const response:any = await api.request({
            url: uri,
            method: "PATCH",
            data: payload,
            signal: cancel ? cancelApiObject[this.update.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    },
    delete: async function (id: number, cancel: boolean): Promise<ProductScaleResponseInterface> {
        const uri = ['/product','categories',id].join('/')
        const response:any = await api.request({
            url: uri,
            method: "DELETE",
            data: {},
            signal: cancel ? cancelApiObject[this.delete.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(ProductScaleApi)