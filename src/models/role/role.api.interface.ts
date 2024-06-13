import { RoleInterface } from "./role.interface";
import { RoleResponseInterface } from "./role.response.interface";

export interface RoleApiInterface {
    list: (cancel:boolean) => Promise<RoleResponseInterface>
    find: (roleId:number, cancel:boolean) => Promise<RoleResponseInterface>
    create: (payload:RoleInterface, cancel:boolean) => Promise<RoleResponseInterface>
    update: (roleId:number, payload:RoleInterface, cancel:boolean) => Promise<RoleResponseInterface>
    remove: (roleId:number, cancel:boolean) => Promise<RoleResponseInterface>
}