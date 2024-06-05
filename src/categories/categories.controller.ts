import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ServiceUnavailableException,
  HttpStatus,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from '../dto/category/create.category.dto';
import { UpdateCategoryDto } from '../dto/category/update.category.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import CategoryResponse from './category.response';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Create category' })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const category = await this.categoriesService.create(createCategoryDto);

    if (!category) {
      throw new ServiceUnavailableException('Could not create category');
    }

    return CategoryResponse(HttpStatus.CREATED, 'Category created', category);
  }

  @Get()
  @ApiOperation({ summary: 'List all categories' })
  async findAll() {
    const categories = await this.categoriesService.findAll();

    return CategoryResponse(HttpStatus.OK, 'Category list', categories);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get specific category' })
  async findOne(@Param('categoryId') categoryId: string) {
    const category: any = await this.categoriesService.findOne(+categoryId);

    return CategoryResponse(HttpStatus.OK, 'Category found', category);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Patch(':categoryId')
  @ApiOperation({ summary: 'Update category' })
  @ApiBearerAuth()
  @Roles('Admin')
  async update(
    @Param('categoryId') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const update = await this.categoriesService.update(
      +categoryId,
      updateCategoryDto,
    );

    return CategoryResponse(HttpStatus.NO_CONTENT, 'Category updated', update);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':categoryId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete category' })
  async remove(@Param('categoryId') categoryId: string) {
    const deleted: any = await this.categoriesService.remove(+categoryId);

    return CategoryResponse(HttpStatus.NO_CONTENT, 'Category deleted', deleted);
  }
}
