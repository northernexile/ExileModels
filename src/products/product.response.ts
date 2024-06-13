import { Product } from 'src/entities/product.entity';
import CustomResponse from 'src/services/responses/custom.response';

const ProductResponse = (
  code: number,
  message: string,
  data: Product | Product[] | object,
) => {
  return CustomResponse(code, message, data);
};

export default ProductResponse;
