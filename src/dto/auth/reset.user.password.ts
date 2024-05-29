import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class ResetUserPasswordDto {
  @ApiProperty({ type: 'string' })
  @Column()
  password: string;

  @ApiProperty({ type: 'string' })
  @Column()
  confirmPassword: string;
}
