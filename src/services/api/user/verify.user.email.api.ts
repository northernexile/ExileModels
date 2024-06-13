import { VerfiyUserEmailApiInterface } from "../../../models/user/verify.user.email.api.interface"
import { VerifyUserEmailInterface } from "../../../models/user/verify.user.email.interface"
import { VerifyUserEmailResponseInterface } from "../../../models/user/verify.user.email.response.interface"
import { api } from "../config/axios.config"
import { defineCancelApiObject } from "../config/define.cancel.api.object"

export const VerifyUserEmailApi:VerfiyUserEmailApiInterface = {
    verify: async function (id: number, token: string, payload: VerifyUserEmailInterface, cancel: boolean): Promise<VerifyUserEmailResponseInterface> {
        const uri:string = ['/auth/verify',id,token].join('/')
        const response:any = await api.request({
            url: uri,
            method: "PATCH",
            data: payload,
            signal: cancel ? cancelApiObject[this.verify.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(VerifyUserEmailApi)