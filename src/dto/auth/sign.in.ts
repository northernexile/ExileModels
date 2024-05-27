import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class SignInDto {
  @ApiProperty()
  @Column({ type: 'varchar' ,nullable:false})
  email: string;
  @ApiProperty()
  @Column({ type: 'varchar' ,nullable:false})
  password: string;
}