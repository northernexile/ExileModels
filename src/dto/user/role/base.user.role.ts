import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class BaseUserRoleDto {
  @ApiProperty()
  @Column({ type: 'int',nullable:true })
  id?: number;

  @ApiProperty()
  @Column({ type: 'int',nullable:false })
  userId?: number;

  @ApiProperty()
  @Column({ type: 'int',nullable:false })
  roleId?: number;
}