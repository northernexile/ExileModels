import { ApiProperty } from '@nestjs/swagger';
import { BaseProductDto } from './base.product.dto';
import { Column } from 'typeorm';

export class CreateProductDto extends BaseProductDto {
  @ApiProperty()
  @Column({ type: 'timestamp' })
  createdAt: Date;
}
