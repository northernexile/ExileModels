import { RegistrationInterface } from "../../../models/user/registration/registration.interface";
import { RegistrationResponseInterface } from "../../../models/user/registration/registration.response.interface";
import { api } from "../config/axios.config";
import { defineCancelApiObject } from "../config/define.cancel.api.object";
import { RegistrationApiInterface } from "./registration.api.interface";

export const RegistrationApi:RegistrationApiInterface = {
    register: async function (payload: RegistrationInterface, cancel: boolean): Promise<RegistrationResponseInterface> {
        const response:any = await api.request({
            url: '/auth/register',
            method: "POST",
            data: payload,
            signal: cancel ? cancelApiObject[this.register.name].handleRequestCancellation().signal : undefined,
          });

        return response.data;
    }
}

const cancelApiObject:any = defineCancelApiObject(RegistrationApi)