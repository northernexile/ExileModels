import { ApiResponseInterface } from "../../api.response.interface";
import { RegisteredUserInterface } from "./registered.user.interface";

export interface RegistrationResponseInterface extends ApiResponseInterface {
    data:RegisteredUserInterface|undefined
}