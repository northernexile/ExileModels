import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductScalesService } from './product-scales.service';
import { CreateProductScaleDto } from '../dto/product/scales/create-product-scale.dto';
import { UpdateProductScaleDto } from '../dto/product/scales/update-product-scale.dto';

@Controller('product-scales')
export class ProductScalesController {
  constructor(private readonly productScalesService: ProductScalesService) {}

  @Post()
  create(@Body() createProductScaleDto: CreateProductScaleDto) {
    return this.productScalesService.create(createProductScaleDto);
  }

  @Get()
  findAll() {
    return this.productScalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productScalesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductScaleDto: UpdateProductScaleDto,
  ) {
    return this.productScalesService.update(+id, updateProductScaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productScalesService.remove(+id);
  }
}
