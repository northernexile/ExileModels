import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class BaseProductDto {
  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  id?: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @ApiProperty()
  @Column({ type: 'text' })
  description: string;

  @ApiProperty()
  @Column({ type: 'tinyint' })
  isReleased: boolean;
}
