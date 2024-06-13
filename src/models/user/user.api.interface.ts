import { ApiResponseInterface } from "../api.response.interface";
import { CreateUserInterface } from "./create.user.interface";
import { FindUserResponseInterface } from "./find.user.response";
import { UpdateUserInterface } from "./update.user.interface";
import { UserListResponseInterface } from "./user.list.interface.response";

export interface UserApiInterface {
    list:(cancel:boolean) => Promise<UserListResponseInterface>,
    find:(userId:number,cancel:boolean) => Promise<FindUserResponseInterface>
    create:(payload:CreateUserInterface,cancel:boolean) => Promise<FindUserResponseInterface>
    update:(userId:number,payload:UpdateUserInterface,cancel:boolean) => Promise<FindUserResponseInterface>
    remove:(userId:number,cancel:boolean) => Promise<ApiResponseInterface> 
}