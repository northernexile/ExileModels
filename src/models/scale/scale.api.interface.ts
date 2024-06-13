import { ScaleInterface } from "./scale.interface";
import { ScaleResponseInterface } from "./scale.reponse.interface";

export interface ScaleApiInterface {
    list: (cancel:boolean) => Promise<ScaleResponseInterface>
    find: (scaleId:number, cancel:boolean) => Promise<ScaleResponseInterface>
    create: (payload:ScaleInterface, cancel:boolean) => Promise<ScaleResponseInterface>
    update: (scaleId:number, payload:ScaleInterface, cancel:boolean) => Promise<ScaleResponseInterface>
    remove: (scaleId:number, cancel:boolean) => Promise<ScaleResponseInterface>
}