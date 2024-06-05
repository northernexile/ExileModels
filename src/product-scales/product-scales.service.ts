import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateProductScaleDto } from '../dto/product/scales/create-product-scale.dto';
import { UpdateProductScaleDto } from '../dto/product/scales/update-product-scale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductScale } from 'src/entities/product-scale.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ProductScalesService {
  constructor(
    @InjectRepository(ProductScale)
    private productScaleRepository: MongoRepository<ProductScale>,
  ) {}
  async create(createProductScaleDto: CreateProductScaleDto) {
    const created = await this.productScaleRepository.save(
      createProductScaleDto,
    );

    if (!created) {
      throw new UnauthorizedException('Cannot create product scale');
    }

    return created;
  }

  async findAll() {
    return await this.productScaleRepository.find();
  }

  async findOne(id: number) {
    const productScale = await this.productScaleRepository.findOneBy({
      id: id,
    });

    if (!productScale) {
      throw new NotFoundException('Product scale not found');
    }

    return productScale;
  }

  async update(id: number, updateProductScaleDto: UpdateProductScaleDto) {
    let updated: any = false;
    const updatedProduct = this.productScaleRepository.create(
      updateProductScaleDto,
    );

    updated = await this.productScaleRepository.update(id, updatedProduct);

    if (!updated) {
      throw new ConflictException('Cannnot update product scale');
    }

    return updated;
  }

  async remove(id: number) {
    let deleted: any = false;

    const found = await this.productScaleRepository.findOneBy({ id: id });

    if (found) {
      deleted = await this.productScaleRepository.delete(id);
    }

    return deleted;
  }
}
