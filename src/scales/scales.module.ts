import { Module } from '@nestjs/common';
import { ScalesService } from './scales.service';
import { ScalesController } from './scales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scale } from 'src/entities/scale.entity';

@Module({
  controllers: [ScalesController],
  providers: [ScalesService],
  exports: [ScalesService],
  imports: [TypeOrmModule.forFeature([Scale])],
})
export class ScalesModule {}
