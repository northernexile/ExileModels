import { PartialType } from '@nestjs/swagger';
import { CreateProductScaleDto } from './create-product-scale.dto';

export class UpdateProductScaleDto extends PartialType(CreateProductScaleDto) {}
