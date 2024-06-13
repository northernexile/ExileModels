import { ProductCategoryInterface } from "./product.category.interface"

export interface ProductCategoryResponseInterface {
    code: number
    message: string
    data: ProductCategoryInterface | ProductCategoryInterface[] | undefined
}