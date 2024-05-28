import customResponse from './custom.response';
import { HttpStatus } from '@nestjs/common';

const UpdatedResponse = (message:string,data:{}|[] = {}) => {
  return customResponse(
    HttpStatus.NO_CONTENT,
    message,
    data
  )
}

export default UpdatedResponse