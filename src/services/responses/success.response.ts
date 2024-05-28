import customResponse from './custom.response';
import { HttpStatus } from '@nestjs/common';

const SuccessResponse = (message:string,data:{}|[] = {}) => {
  return customResponse(
    HttpStatus.OK,
    message,
    data
  )
}

export default SuccessResponse