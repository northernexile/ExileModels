import { ApiResponseInterface } from "../../../models/api.response.interface"
import { CreateUserInterface } from "../../../models/user/create.user.interface"
import { FindUserResponseInterface } from "../../../models/user/find.user.response"
import { UpdateUserInterface } from "../../../models/user/update.user.interface"
import { UserApiInterface } from "../../../models/user/user.api.interface"
import { UserListResponseInterface } from "../../../models/user/user.list.interface.response"
import { defineCancelApiObject } from "../config/define.cancel.api.object"


export const UserApi:UserApiInterface = {
    list: function (cancel: boolean): Promise<UserListResponseInterface> {
        throw new Error("Function not implemented.")
    },
    find: function (userId: number, cancel: boolean): Promise<FindUserResponseInterface> {
        throw new Error("Function not implemented.")
    },
    create: function (payload: CreateUserInterface, cancel: boolean): Promise<FindUserResponseInterface> {
        throw new Error("Function not implemented.")
    },
    update: function (userId: number, payload: UpdateUserInterface, cancel: boolean): Promise<FindUserResponseInterface> {
        throw new Error("Function not implemented.")
    },
    remove: function (userId: number, cancel: boolean): Promise<ApiResponseInterface> {
        throw new Error("Function not implemented.")
    }
}

const cancelApiObject:any = defineCancelApiObject(UserApi)