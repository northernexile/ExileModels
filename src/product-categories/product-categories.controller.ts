import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';
import { CreateProductCategoryDto } from '../dto/product/category/create-product-category.dto';
import { UpdateProductCategoryDto } from '../dto/product/category/update-product-category.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('product/categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create product category' })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return this.productCategoriesService.create(createProductCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'list product categories' })
  findAll() {
    return this.productCategoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get specific product category' })
  findOne(@Param('id') id: string) {
    return this.productCategoriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update product category' })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @Roles('Admin')
  update(
    @Param('id') id: string,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return this.productCategoriesService.update(+id, updateProductCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product category' })
  @ApiBearerAuth()
  @Roles('Admin')
  remove(@Param('id') id: string) {
    return this.productCategoriesService.remove(+id);
  }
}
