import { CategoryInterface } from "./category.interface";

export interface CategoryResponseInterface {
    code: number,
    message: string,
    data: CategoryInterface[] | CategoryInterface | undefined
}