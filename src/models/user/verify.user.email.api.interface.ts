import { VerifyUserEmailInterface } from "./verify.user.email.interface";
import { VerifyUserEmailResponseInterface } from "./verify.user.email.response.interface";

export interface VerfiyUserEmailApiInterface {
    verify:(id:number,token:string,payload:VerifyUserEmailInterface,cancel:boolean) => Promise<VerifyUserEmailResponseInterface>
}