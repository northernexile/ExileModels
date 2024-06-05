import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductScaleDto } from './create.product.scale.dto';
import { Column } from 'typeorm';

export class UpdateProductScaleDto extends PartialType(CreateProductScaleDto) {
  @ApiProperty()
  @Column({ type: 'timestamp' })
  updatedAt: Date;
}
