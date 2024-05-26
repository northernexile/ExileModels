
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashPassword as Hash}  from '../auth/password.hash'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({type:'varchar',nullable:false})
  username: string;
  @Column({type:'varchar',nullable:false})
  email: string;
  @Column({type:'varchar',nullable:false})
  password: string;
  @Column({type:'timestamp',nullable:false})
  createdAt: Date;
  @Column({type:'timestamp',nullable:false})
  updatedAt: Date;
}