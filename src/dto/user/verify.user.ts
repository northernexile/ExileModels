import { Column } from 'typeorm';
import { UpdateUserDto } from './update.user';

export class VerifyUserDto extends UpdateUserDto {
  @Column({ type: 'timestamp', nullable: true })
  verifiedAt: Date;
}
