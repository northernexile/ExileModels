
import customResponse from '../services/responses/custom.response';
import { UserEntity } from '../entities/user.entity';

const UserResponse = (code:number,message:string,data:UserEntity|UserEntity[]|any[]|{}) => {
  return customResponse(
    code,
    message,
    data
  )
}

export default UserResponse