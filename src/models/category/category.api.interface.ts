import { CategoryInterface } from "./category.interface";
import { CategoryResponseInterface } from "./category.response.interface";

export interface CategoryApiInterface {
    list: (cancel:boolean) => Promise<CategoryResponseInterface>
    find: (categoryId:number, cancel:boolean) => Promise<CategoryResponseInterface>
    create: (payload:CategoryInterface, cancel:boolean) => Promise<CategoryResponseInterface>
    update: (categoryId:number, payload:CategoryInterface, cancel:boolean) => Promise<CategoryResponseInterface>
    remove: (categoryId:number, cancel:boolean) => Promise<CategoryResponseInterface>
}