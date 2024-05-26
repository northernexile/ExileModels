import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_roles')
class UserRole {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({type:'bigint',nullable:false})
  userId: string

  @Column({type:'bigint',nullable:false})
  roleId: string

  @Column({type:'timestamp',nullable:false})
  createdAt: Date;

  @Column({type:'timestamp',nullable:true})
  updatedAt: Date;
}