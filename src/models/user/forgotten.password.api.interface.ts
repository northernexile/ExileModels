import { ForgottenPasswordInterface } from "./forgotten.password.interface";
import { ForgottenPasswordResponseInterface } from "./forgotten.password.response.interface";

export interface ForgottenPasswordApiInterface {
    forgotten:(payload:ForgottenPasswordInterface,cancel:boolean) => Promise<ForgottenPasswordResponseInterface>
}