import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class ProductCategory {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint', nullable: false })
  productId: number;

  @Column({ type: 'bigint', nullable: false })
  categoryId: number;

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
