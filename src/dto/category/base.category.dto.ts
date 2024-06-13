import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class BaseCategoryDto {
  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  id?: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  name: string;
}
