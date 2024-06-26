import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from '../dto/product/category/create.product.category.dto';
import { UpdateProductCategoryDto } from '../dto/product/category/update.product.category.dto';

@Injectable()
export class ProductCategoriesService {
  create(createProductCategoryDto: CreateProductCategoryDto) {
    return 'This action adds a new productCategory';
  }

  findAll() {
    return `This action returns all productCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategory`;
  }

  update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    return `This action updates a #${id} productCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
