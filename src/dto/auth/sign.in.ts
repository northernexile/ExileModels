import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class SignInDto {
  @ApiProperty()
  @Column({ type: 'string' ,nullable:false})
  email: string;
  @ApiProperty()
  @Column({ type: 'string' ,nullable:false})
  password: string;
}