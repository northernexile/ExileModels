import { Column } from 'typeorm';
import { BaseScaleDto } from './base.scale.dto';

export class CreateScaleDto extends BaseScaleDto {
  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;
}
