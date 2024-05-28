import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoleEntity } from './user.role.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({type:'varchar',nullable:false})
  name: string

  @Column({type:'timestamp',nullable:false})
  createdAt: Date;

  @Column({type:'timestamp',nullable:true})
  updatedAt: Date;
}