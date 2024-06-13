import { ProductInterface } from "./product.interface";
import { ProductResponseInterface } from "./product.response.interface";

export interface ProductApiInterface {
    list: (cancel:boolean) => Promise<ProductResponseInterface>
    find: (productId:number, cancel:boolean) => Promise<ProductResponseInterface>
    create: (payload:ProductInterface, cancel:boolean) => Promise<ProductResponseInterface>
    update: (productId:number, payload:ProductInterface, cancel:boolean) => Promise<ProductResponseInterface>
    remove: (productId:number, cancel:boolean) => Promise<ProductResponseInterface>
}