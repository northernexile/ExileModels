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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from '../dto/category/create.category.dto';
import { UpdateCategoryDto } from '../dto/category/update.category.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Create category' })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all categories' })
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get specific category' })
  async findOne(@Param('categoryId') categoryId: string) {
    return await this.categoriesService.findOne(+categoryId);
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
    return await this.categoriesService.update(+categoryId, updateCategoryDto);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':categoryId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete category' })
  async remove(@Param('categoryId') categoryId: string) {
    return await this.categoriesService.remove(+categoryId);
  }
}
