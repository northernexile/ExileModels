
import { api } from "../config/axios.config"
import { defineCancelApiObject } from "../config/define.cancel.api.object"
import { CredentialsInterface } from "../../../models/credentials/CredentialsInterface"
import { LoginApiInterface } from "./login.api.interface";
import { LoginResponseInterface } from "../../../models/auth/login.response.interface";


export const LoginApi:LoginApiInterface = {
    login: async function (payload: CredentialsInterface, cancel = false): Promise<LoginResponseInterface> {
        const response:any = await api.request({
            url: '/auth/login',
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.login.name].handleRequestCancellation().signal : undefined,
          });

        return response.data
    }
}

const cancelApiObject:any = defineCancelApiObject(LoginApi)