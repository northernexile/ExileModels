import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_roles')
export class UserRoleEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint', nullable: false })
  userId: number;

  @Column({ type: 'bigint', nullable: false })
  roleId: number;

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
