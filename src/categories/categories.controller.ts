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
import { CreateCategoryDto } from '../dto/category/create-category.dto';
import { UpdateCategoryDto } from '../dto/category/update-category.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoriesService.create(createCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('categoryId') categoryId: string) {
    return await this.categoriesService.findOne(+categoryId);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Patch(':categoryId')
  @Roles('Admin')
  async update(
    @Param('categoryId') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoriesService.update(+categoryId, updateCategoryDto);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':categoryId')
  async remove(@Param('categoryId') categoryId: string) {
    return await this.categoriesService.remove(+categoryId);
  }
}
