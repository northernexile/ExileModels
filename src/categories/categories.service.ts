import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { CreateCategoryDto } from '../dto/category/create.category.dto';
import { UpdateCategoryDto } from '../dto/category/update.category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: MongoRepository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.save(createCategoryDto);

    if (!category) {
      throw new ServiceUnavailableException('Could not create category');
    }

    return category;
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneBy({ id: id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updating = this.categoryRepository.create(updateCategoryDto);

    const updated = await this.categoryRepository.update(id, updating);

    if (!updated) {
      throw new ConflictException({
        code: HttpStatus.CONFLICT,
        message: 'Message could not update category',
      });
    }

    return updated;
  }

  async remove(id: number) {
    const toDelete: any = await this.categoryRepository.findOneBy({ id: id });

    if (!toDelete) {
      throw new NotFoundException({
        code: HttpStatus.NOT_FOUND,
        message: 'Category not found',
      });
    }

    return this.categoryRepository.delete(id);
  }
}
