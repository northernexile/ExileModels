
import { LoginResponseInterface } from "../../../models/auth/login.response.interface";
import { CredentialsInterface } from "../../../models/credentials/CredentialsInterface";

export interface LoginApiInterface {
    login:(payload:CredentialsInterface,cancel?: boolean) => Promise<LoginResponseInterface>
}