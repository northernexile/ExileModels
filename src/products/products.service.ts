import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: MongoRepository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    return `This action returns all products`;
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id: id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    let deleted = false;
    const product = await this.productRepository.findOneBy({ id: id });

    if (product) {
      await this.productRepository.delete(id);
      deleted = true;
    }

    return deleted;
  }
}
