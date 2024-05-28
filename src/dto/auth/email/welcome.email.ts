import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class WelcomeEmailDto {
  @ApiProperty({type:'string'})
  @Column()
  name:string

  @ApiProperty({type:'string'})
  @Column()
  email:string

  @ApiProperty({type:'string'})
  @Column()
  link:string
}