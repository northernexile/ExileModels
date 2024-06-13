import { ProductScaleInterface } from "./product.scale.interface"
import { ProductScaleResponseInterface } from "./product.scale.response.interface"

export interface ProductScaleApiInterface {
    list:(cancel:boolean) => Promise<ProductScaleResponseInterface>
    create:(payload:ProductScaleInterface, cancel:boolean) => Promise<ProductScaleResponseInterface>
    find:(id:number,cancel:boolean) => Promise<ProductScaleResponseInterface>
    update: (id:number,payload:ProductScaleInterface,cancel:boolean) => Promise<ProductScaleResponseInterface>
    delete: (id:number,cancel:boolean) => Promise<ProductScaleResponseInterface>
}