import { ApiResponseInterface } from "../api.response.interface";
import { UserAuthInterface } from "./UserAuthInterface";

export interface LoginResponseInterface extends ApiResponseInterface {
    data: UserAuthInterface|undefined
}