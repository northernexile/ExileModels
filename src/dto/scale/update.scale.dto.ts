import { PartialType } from '@nestjs/swagger';
import { CreateScaleDto } from './create.scale.dto';
import { Column } from 'typeorm';

export class UpdateScaleDto extends PartialType(CreateScaleDto) {
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
