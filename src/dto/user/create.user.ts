
import { BaseUser } from './base.user';
import { Column } from 'typeorm';

export class CreateUserDto extends BaseUser {
  @Column({ type: 'timestamp' ,nullable:false})
  createdAt:Date
}