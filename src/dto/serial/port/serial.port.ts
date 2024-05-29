import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class SerialPortDto {
  @ApiProperty()
  @Column({ type: 'varchar' })
  path: string;

  @ApiProperty()
  @Column({ type: 'varchar' })
  manufacturer: string;

  @ApiProperty()
  @Column({ type: 'varchar' })
  serialNumber: string;

  @ApiProperty()
  @Column({ type: 'varchar' })
  pnpId: string;

  @ApiProperty()
  @Column({ type: 'varchar' })
  vendorId: string;

  @ApiProperty()
  @Column({ type: 'varchar' })
  productId: string;
}
