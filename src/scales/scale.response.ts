import CustomResponse from 'src/services/responses/custom.response';
import { Scale } from '../entities/scale.entity';

const ScaleResponse = (
  code: number,
  message: string,
  data: object | Scale | Scale[],
) => {
  return CustomResponse(code, message, data);
};

export default ScaleResponse;
