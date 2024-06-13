import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { BaseProductScaleDto } from './base.product.scale.dto';

export class CreateProductScaleDto extends BaseProductScaleDto {
  @ApiProperty()
  @Column({ type: 'timestamp' })
  createdAt: Date;
}
