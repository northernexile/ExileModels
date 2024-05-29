import { BaseRoleDto } from './base.role';
import { Column } from 'typeorm';

export class UpdateRoleDto extends BaseRoleDto {
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
