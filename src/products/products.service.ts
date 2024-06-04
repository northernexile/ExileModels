import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/product/create.product.dto';
import { UpdateProductDto } from '../dto/product/update.product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: MongoRepository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id: id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let result: any = false;
    const product = this.productRepository.create(updateProductDto);

    if (product) {
      result = this.productRepository.update(id, product);
    }

    return result;
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
