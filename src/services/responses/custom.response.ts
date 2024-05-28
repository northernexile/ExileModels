
const CustomResponse = (code:number,message:string,data:{}|[] = {}) => {
  return {
    code:code,
    message:message,
    data:data
  }
}

export default CustomResponse;