import { Injectable } from '@nestjs/common';
import { CreateProductScaleDto } from '../dto/product/scales/create-product-scale.dto'
import { UpdateProductScaleDto } from '../dto/product/scales/update-product-scale.dto';

@Injectable()
export class ProductScalesService {
  async create(createProductScaleDto: CreateProductScaleDto) {
    return 'This action adds a new productScale';
  }

  async findAll() {
    return `This action returns all productScales`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} productScale`;
  }

  async update(id: number, updateProductScaleDto: UpdateProductScaleDto) {
    return `This action updates a #${id} productScale`;
  }

  async remove(id: number) {
    return `This action removes a #${id} productScale`;
  }
}
