import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { BaseUser} from '../dto/user/base.user';
import {CreateUserDto} from '../dto/user/create.user';
import {UserEntity} from '../entities/user.entity';
import {MongoRepository} from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: MongoRepository<UserEntity>,
  ) { }
  async findOneBy(email: string): Promise<UserEntity | undefined | null> {
    return await this.userRepository.findOneBy({ email: email });
  }
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save({
      ...createUserDto,
      createdAt: new Date(),
    });
  }
}
