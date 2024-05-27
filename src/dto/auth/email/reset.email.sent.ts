import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class ResetEmailSentDto {
  @ApiProperty({type:'varchar'})
  @Column()
  email:string

  @ApiProperty({type:'varchar'})
  @Column()
  message:string
}