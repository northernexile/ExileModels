import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class SignUpDto {
  @ApiProperty()
  @Column({ type: 'string' ,nullable:false})
  email: string;
  @ApiProperty()
  @Column({ type: 'string' ,nullable:false})
  password: string;
  @ApiProperty()
  @Column({ type: 'string' ,nullable:false})
  confirm: string;
  @ApiProperty()
  @Column({type:'string',nullable:false})
  username: string
}