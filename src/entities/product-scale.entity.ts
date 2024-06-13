import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_scales')
export class ProductScale {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint', nullable: false })
  productId: number;

  @Column({ type: 'bigint', nullable: false })
  scaleId: number;

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
