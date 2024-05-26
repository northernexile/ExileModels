import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
class Role {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({type:'varchar',nullable:false})
  name: string

  @Column({type:'timestamp',nullable:false})
  createdAt: Date;

  @Column({type:'timestamp',nullable:true})
  updatedAt: Date;
}