import { UserRoleResponseInterface } from "./user.role.response.interface";

export interface UserRoleApiInteface {
    list:(userId:number, cancel:boolean) => Promise<UserRoleResponseInterface>
    add:(userId:number,roleId:number, cancel: boolean) => Promise<UserRoleResponseInterface>
    remove:(userId:number,roleId:number, cancel:boolean) => Promise<UserRoleResponseInterface>
}