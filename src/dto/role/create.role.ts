
import { BaseRole } from './base.role';
import { Column } from 'typeorm';

export class CreateRoleDto extends BaseRole {
  @Column({ type: 'timestamp' ,nullable:false})
  createdAt:Date
}
