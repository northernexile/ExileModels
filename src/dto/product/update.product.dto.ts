import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create.product.dto';
import { Column } from 'typeorm';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  @Column({ type: 'timestamp' })
  updatedAt: Date;
}
