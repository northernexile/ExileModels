import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class SignUpDto {
  @ApiProperty()
  @Column({ type: 'varchar' ,nullable:false})
  email: string;
  @ApiProperty()
  @Column({ type: 'varchar' ,nullable:false})
  password: string;
  @ApiProperty()
  @Column({ type: 'varchar' ,nullable:false})
  confirm: string;
  @ApiProperty()
  @Column({type:'varchar',nullable:false})
  username: string
}