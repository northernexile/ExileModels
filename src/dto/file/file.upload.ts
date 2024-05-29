import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class FileUploadDto {
  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  relateToType?: number;
  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  attachToEntityId?: number;
  @ApiProperty()
  @Column({ type: 'string', nullable: false })
  title: string;
}
