import { UserRoleInterface } from "./user.role.interface"

export interface UserRoleResponseInterface {
    code: number
    message: string
    data: UserRoleInterface| UserRoleInterface[] | undefined
}