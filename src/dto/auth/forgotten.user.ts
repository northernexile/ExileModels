import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class ForgottenUserDto {
  @ApiProperty()
  @Column({type:'varchar',nullable:false})
  email:string
}