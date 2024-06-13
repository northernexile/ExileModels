import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../dto/product/create.product.dto';
import { UpdateProductDto } from '../dto/product/update.product.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles/roles.decorator';
import productResponse from './product.response';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a product',
  })
  @ApiOperation({ summary: 'Create product' })
  @Roles('Admin')
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.create(createProductDto);

    if (!product) {
      throw new UnauthorizedException('Could not create product');
    }

    return productResponse(HttpStatus.CREATED, 'Product created', product);
  }

  @Get('list')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List all products',
  })
  @ApiOperation({ summary: 'List all products' })
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find product' })
  @ApiResponse({
    status: HttpStatus.FOUND,
    description: 'find product by id',
  })
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(+id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return productResponse(HttpStatus.FOUND, 'Product found', product);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiOperation({ summary: 'Update product' })
  @ApiBearerAuth()
  @Roles('Admin')
  @ApiParam({
    name: 'productId',
    description: 'The product id',
    required: true,
    type: 'Number',
  })
  async update(
    @Param('productId') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const updated = await this.productsService.update(
      +productId,
      updateProductDto,
    );

    if (!updated) {
      throw new ConflictException('Could not update product');
    }

    return productResponse(HttpStatus.NO_CONTENT, 'Product updated', updated);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiOperation({ summary: 'Delete product' })
  @ApiBearerAuth()
  @Roles('Admin')
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(+id);
  }
}
