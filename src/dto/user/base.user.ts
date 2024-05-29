import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
export class BaseUser {
  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  id?: number;
  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  username: string;
  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  email: string;
  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  password: string;
  @ApiProperty()
  confirmPassword?: string;
}
