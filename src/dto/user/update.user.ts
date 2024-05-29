import { BaseUser } from './base.user';
import { Column } from 'typeorm';

export class UpdateUserDto extends BaseUser {
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
