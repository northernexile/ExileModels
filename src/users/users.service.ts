import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import {CreateUserDto} from '../dto/user/create.user';
import {UserEntity} from '../entities/user.entity';
import {MongoRepository} from 'typeorm';
import {hashPassword} from '../auth/password.hash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: MongoRepository<UserEntity>
  ) { }
  async findOneBy(email: string): Promise<UserEntity | undefined | null> {
    return await this.userRepository.findOneBy({ email: email });
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOneById(id:number) : Promise<UserEntity | undefined | null> {
    return await this.userRepository.findOneBy({id:id})
  }
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = hashPassword(createUserDto.password)
    return this.userRepository.save({
      ...createUserDto,
      createdAt: new Date(),
    });
  }
}
