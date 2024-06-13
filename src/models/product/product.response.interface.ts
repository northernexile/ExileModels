import { ProductInterface } from "./product.interface"

export interface ProductResponseInterface{
    code: number
    message: string
    data: ProductInterface[] | ProductInterface | undefined 
}