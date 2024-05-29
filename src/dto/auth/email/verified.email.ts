import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class VerifiedEmailDto {
  @ApiProperty({ type: 'string' })
  @Column()
  name: string;

  @ApiProperty({ type: 'string' })
  @Column()
  email: string;
}
