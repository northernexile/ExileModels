
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
@Entity()
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}