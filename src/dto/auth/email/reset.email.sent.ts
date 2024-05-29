import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class ResetEmailSentDto {
  @ApiProperty({ type: 'string' })
  @Column()
  email: string;

  @ApiProperty({ type: 'string' })
  @Column()
  message: string;
}
