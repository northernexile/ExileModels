import { RegistrationInterface } from "../../../models/user/registration/registration.interface";
import { RegistrationResponseInterface } from "../../../models/user/registration/registration.response.interface";

export interface RegistrationApiInterface {
    register:(payload:RegistrationInterface,cancel:boolean) => Promise<RegistrationResponseInterface>
}