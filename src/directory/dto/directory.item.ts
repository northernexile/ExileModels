import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class DirectoryItemDto {
  @ApiProperty()
  @Column({ type: 'varchar' })
  method: string;

  @ApiProperty()
  @Column({ type: 'varchar' })
  path: string;

  @ApiProperty()
  @Column({ type: 'varchar' })
  pattern: string;
}
