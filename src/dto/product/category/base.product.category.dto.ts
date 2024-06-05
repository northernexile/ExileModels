import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class BaseProductCategoryDto {
  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  id?: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  productId?: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  categoryId?: number;
}
