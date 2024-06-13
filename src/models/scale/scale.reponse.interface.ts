import { ScaleInterface } from "./scale.interface";

export interface ScaleResponseInterface {
    code: number,
    message: string,
    data: ScaleInterface[] | ScaleInterface | undefined 
}