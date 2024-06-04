import { Injectable } from '@nestjs/common';
import { CreateProductScaleDto } from './dto/create-product-scale.dto';
import { UpdateProductScaleDto } from './dto/update-product-scale.dto';

@Injectable()
export class ProductScalesService {
  create(createProductScaleDto: CreateProductScaleDto) {
    return 'This action adds a new productScale';
  }

  findAll() {
    return `This action returns all productScales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productScale`;
  }

  update(id: number, updateProductScaleDto: UpdateProductScaleDto) {
    return `This action updates a #${id} productScale`;
  }

  remove(id: number) {
    return `This action removes a #${id} productScale`;
  }
}
