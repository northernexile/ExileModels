import { RoleEntity } from '../entities/role.entity';
import customResponse from '../services/responses/custom.response';

const RoleResponse = (
  code: number,
  message: string,
  data: RoleEntity | RoleEntity[] | any[] | {},
) => {
  return customResponse(code, message, data);
};

export default RoleResponse;
