import { BaseUserRoleDto } from './base.user.role';
import { Column } from 'typeorm';

export class UpdateUserRoleDto extends BaseUserRoleDto {
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
