
import { BeforeInsert, Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { hashPassword as Hash}  from '../auth/password.hash'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({type:'varchar',nullable:false})
  username: string;

  @Index({ unique: true })
  @Column({type:'varchar',nullable:false})
  email: string;

  @Column({type:'varchar',nullable:false})
  password: string;

  @Column({type:'timestamp',nullable:false})
  createdAt: Date;

  @Column({type:'timestamp',nullable:false})
  updatedAt: Date;
}