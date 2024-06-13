import { ResetPasswordApiInterface } from "../../../models/user/reset.password.api.interface";
import { ResetPasswordInterface } from "../../../models/user/reset.password.interface";
import { ResetPasswordResponseInterface } from "../../../models/user/reset.password.response.interface";
import { api } from "../config/axios.config";
import { defineCancelApiObject } from "../config/define.cancel.api.object";

export const ResetPasswordApi:ResetPasswordApiInterface = {
    reset: async function (id: number, token: string, payload: ResetPasswordInterface,cancel:boolean): Promise<ResetPasswordResponseInterface> {
        const uri:string = ['/auth/reset/',id,token].join()
        const response:any = await api.request({
            url: uri,
            method: "PATCH",
            data: payload,
            signal: cancel ? cancelApiObject[this.reset.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(ResetPasswordApi)