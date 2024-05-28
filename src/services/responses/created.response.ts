import customResponse from './custom.response';
import { HttpStatus } from '@nestjs/common';

const CreatedResponse = (message:string,data:{}|[] = {}) => {
  return customResponse(
    HttpStatus.CREATED,
    message,
    data
  )
}

export default CreatedResponse