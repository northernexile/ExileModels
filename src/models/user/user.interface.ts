
export interface UserInterface {
    id:number,
    username:string,
    email:string,
    password:string,
    createdAt:Date,
    updatedAt:Date|null,
    verifedAt:Date|null
}