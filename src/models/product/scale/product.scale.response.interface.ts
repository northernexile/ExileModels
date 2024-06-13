import { ProductScaleInterface } from "./product.scale.interface"

export interface ProductScaleResponseInterface {
    code: number
    message: string
    data: ProductScaleInterface[] | ProductScaleInterface | undefined
}