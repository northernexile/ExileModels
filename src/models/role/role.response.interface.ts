import { RoleInterface } from "./role.interface";

export interface RoleResponseInterface {
    code: number,
    message: string,
    data: RoleInterface[] | RoleInterface | [] | null | undefined
}