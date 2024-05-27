
import { BaseRoleDto } from './base.role';
import { Column } from 'typeorm';

export class CreateRoleDto extends BaseRoleDto {
  @Column({ type: 'timestamp' ,nullable:false})
  createdAt:Date
}
