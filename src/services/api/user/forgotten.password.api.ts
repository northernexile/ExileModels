import { ForgottenPasswordApiInterface } from "../../../models/user/forgotten.password.api.interface";
import { ForgottenPasswordInterface } from "../../../models/user/forgotten.password.interface";
import { ForgottenPasswordResponseInterface } from "../../../models/user/forgotten.password.response.interface";
import { api } from "../config/axios.config";
import { defineCancelApiObject } from "../config/define.cancel.api.object";

export const ForgottenPasswordApi:ForgottenPasswordApiInterface = {
    forgotten: async function (payload: ForgottenPasswordInterface, cancel: boolean): Promise<ForgottenPasswordResponseInterface> {
        const response:any = await api.request({
            url: '/auth/forgotten',
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.forgotten.name].handleRequestCancellation().signal : undefined,
          });

        return response;
    }
}

const cancelApiObject:any = defineCancelApiObject(ForgottenPasswordApi);