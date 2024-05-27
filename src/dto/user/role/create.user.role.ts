import { BaseUserRoleDto } from './base.user.role';
import { Column } from 'typeorm';

export class CreateUserRoleDto extends BaseUserRoleDto {
  @Column({ type: 'timestamp' ,nullable:false})
  createdAt:Date
}