import { Category } from 'src/entities/category.entity';
import CustomResponse from 'src/services/responses/custom.response';

const CategoryResponse = (
  code: number,
  message: string,
  data: Category | Category[] | object,
) => {
  return CustomResponse(code, message, data);
};

export default CategoryResponse;
