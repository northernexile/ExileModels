import { UserInterface } from "./user.interface";

export interface FindUserResponseInterface {
    code: number,
    message:string,
    data: UserInterface|null
}