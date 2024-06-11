import { UserAuthInterface } from "../../../models/auth/UserAuthInterface";
import { CredentialsInterface } from "../../../models/credentials/CredentialsInterface";

export interface LoginApiInterface {
    login:(payload:CredentialsInterface,cancel?: boolean) => Promise<UserAuthInterface>
}