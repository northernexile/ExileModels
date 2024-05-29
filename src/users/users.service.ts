import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/user/create.user';
import { UserEntity } from '../entities/user.entity';
import { MongoRepository } from 'typeorm';
import { hashPassword } from '../auth/password.hash';
import { UpdateUserDto } from '../dto/user/update.user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: MongoRepository<UserEntity>,
  ) {}
  async findOneBy(email: string): Promise<UserEntity | undefined | null> {
    return await this.userRepository.findOneBy({ email: email });
  }

  async update(userId: number, payload: UpdateUserDto) {
    let result: any = false;
    const user = this.userRepository.create({
      updatedAt: new Date(),
      username: payload.username,
      email: payload.email,
    });
    if (await this.userRepository.update(userId, user)) {
      result = user;
    }

    return result;
  }

  async delete(id: number) {
    let deleted = false;
    const user = await this.userRepository.findOneBy({ id: id });
    if (user) {
      await this.userRepository.delete(id);
      deleted = true;
    }

    return deleted;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOneById(id: number): Promise<UserEntity | undefined | null> {
    return await this.userRepository.findOneBy({ id: id });
  }
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = hashPassword(createUserDto.password);
    return this.userRepository.save({
      ...createUserDto,
      createdAt: new Date(),
    });
  }
}
