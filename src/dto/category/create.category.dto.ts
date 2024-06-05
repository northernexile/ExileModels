import { Column } from 'typeorm';
import { BaseCategoryDto } from './base.category.dto';

export class CreateCategoryDto extends BaseCategoryDto {
  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;
}
