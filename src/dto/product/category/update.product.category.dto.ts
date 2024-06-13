import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductCategoryDto } from './create.product.category.dto';
import { Column } from 'typeorm';

export class UpdateProductCategoryDto extends PartialType(
  CreateProductCategoryDto,
) {
  @ApiProperty()
  @Column({ type: 'timestamp' })
  updatedAt: Date;
}
