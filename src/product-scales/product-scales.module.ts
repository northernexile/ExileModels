import { Module } from '@nestjs/common';
import { ProductScalesService } from './product-scales.service';
import { ProductScalesController } from './product-scales.controller';

@Module({
  controllers: [ProductScalesController],
  providers: [ProductScalesService],
})
export class ProductScalesModule {}
