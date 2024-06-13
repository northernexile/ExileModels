import { ProductCategoryInterface } from "./product.category.interface";
import { ProductCategoryResponseInterface } from "./product.category.response.interface";

export interface ProductCategoryApiInterface {
    list:(cancel:boolean) => Promise<ProductCategoryResponseInterface>
    create:(payload:ProductCategoryInterface, cancel:boolean) => Promise<ProductCategoryResponseInterface>
    find:(id:number,cancel:boolean) => Promise<ProductCategoryResponseInterface>
    update: (id:number,payload:ProductCategoryInterface,cancel:boolean) => Promise<ProductCategoryResponseInterface>
    delete: (id:number,cancel:boolean) => Promise<ProductCategoryResponseInterface>
}