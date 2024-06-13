import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { BaseProductCategoryDto } from './base.product.category.dto';

export class CreateProductCategoryDto extends BaseProductCategoryDto {
  @ApiProperty()
  @Column({ type: 'timestamp' })
  createdAt: Date;
}
