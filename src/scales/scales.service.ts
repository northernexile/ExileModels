import {
  BadRequestException,
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateScaleDto } from '../dto/scale/create.scale.dto';
import { UpdateScaleDto } from '../dto/scale/update.scale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Scale } from '../entities/scale.entity';

@Injectable()
export class ScalesService {
  constructor(
    @InjectRepository(Scale) private scaleRepository: MongoRepository<Scale>,
  ) {}
  async create(createScaleDto: CreateScaleDto) {
    const saved = await this.scaleRepository.save(createScaleDto);

    if (!saved) {
      throw new BadRequestException({
        code: HttpStatus.BAD_REQUEST,
        message: 'Could not create scale',
      });
    }

    return saved;
  }

  async findAll() {
    const scales = await this.scaleRepository.find();

    if (!scales) {
      throw new NotFoundException('Could not list scales');
    }

    return scales;
  }

  async findOne(id: number) {
    const scale = await this.scaleRepository.findOneBy({ id: id });

    if (!scale) {
      throw new NotFoundException({
        code: HttpStatus.NOT_FOUND,
        message: 'Scale not found',
      });
    }

    return scale;
  }

  async update(id: number, updateScaleDto: UpdateScaleDto) {
    const updatingScale = this.scaleRepository.create(updateScaleDto);

    const updated = await this.scaleRepository.update(id, updatingScale);

    if (!updated) {
      throw new ConflictException({
        code: HttpStatus.CONFLICT,
        message: 'Could not update scale',
      });
    }

    return updated;
  }

  async remove(id: number) {
    const exists = await this.scaleRepository.findOneBy({ id: id });

    if (!exists) {
      throw new NotFoundException({
        code: HttpStatus.NOT_FOUND,
        message: 'Scale not found',
      });
    }

    return await this.scaleRepository.delete(id);
  }
}
