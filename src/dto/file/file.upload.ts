import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class FileUploadDto {
  @ApiProperty()
  @Column({ type: 'int' })
  relateToType?: number;
  @ApiProperty()
  @Column({ type: 'int' })
  attachToEntityId?: number;
}
