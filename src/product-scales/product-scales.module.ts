import { Module } from '@nestjs/common';
import { ProductScalesService } from './product-scales.service';
import { ProductScalesController } from './product-scales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductScale } from 'src/entities/product-scale.entity';

@Module({
  controllers: [ProductScalesController],
  providers: [ProductScalesService],
  exports: [ProductScalesService],
  imports: [TypeOrmModule.forFeature([ProductScale])],
})
export class ProductScalesModule {}
