
import { api } from "../config/axios.config"
import { defineCancelApiObject } from "../config/define.cancel.api.object"

interface Credentials  {
    email:string,
    password:string
}

interface User {
    user:{
        id:number
        email:string,
        name:string,
        roles:[]
    },
    access_token:string
}

interface LoginApi {
    login:(payload:Credentials,cancel?: boolean) => Promise<User>
}

export const LoginApi:LoginApi = {
    login: async function (payload: Credentials, cancel = false): Promise<User> {
        const response:any = await api.request({
            url: `/auth/login`,
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.login.name].handleRequestCancellation().signal : undefined,
          });

        return response.data  
    }
}

const cancelApiObject:any = defineCancelApiObject(LoginApi)