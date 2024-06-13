import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create.category.dto';
import { Column } from 'typeorm';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
