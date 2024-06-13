import { ResetPasswordInterface } from "./reset.password.interface";
import { ResetPasswordResponseInterface } from "./reset.password.response.interface";

export interface ResetPasswordApiInterface {
    reset:(id:number,token:string,payload:ResetPasswordInterface,cancel:boolean) => Promise<ResetPasswordResponseInterface>
}