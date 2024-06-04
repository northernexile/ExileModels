import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductScalesService } from './product-scales.service';
import { CreateProductScaleDto } from '../dto/product/scales/create-product-scale.dto';
import { UpdateProductScaleDto } from '../dto/product/scales/update-product-scale.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('product/scales')
export class ProductScalesController {
  constructor(private readonly productScalesService: ProductScalesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @Roles('Admin')
  async create(@Body() createProductScaleDto: CreateProductScaleDto) {
    return await this.productScalesService.create(createProductScaleDto);
  }

  @Get()
  async findAll() {
    return await this.productScalesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productScalesService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  async update(
    @Param('id') id: string,
    @Body() updateProductScaleDto: UpdateProductScaleDto,
  ) {
    return await this.productScalesService.update(+id, updateProductScaleDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  async remove(@Param('id') id: string) {
    return await this.productScalesService.remove(+id);
  }
}
