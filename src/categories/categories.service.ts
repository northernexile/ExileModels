import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/category/create-category.dto';
import { UpdateCategoryDto } from '../dto/category/update-category.dto';

@Injectable()
export class CategoriesService {
  async create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  async findAll() {
    return `This action returns all categories`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
