import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import {CreateUserRoleDto } from '../../dto/user/role/create.user.role';
import {UserRoleEntity } from '../../entities/user.role.entity';
import {MongoRepository} from 'typeorm';

@Injectable()
export class UsersRolesService {
  constructor(
    @InjectRepository(UserRoleEntity)
    private userRoleRepository: MongoRepository<UserRoleEntity>
  ) { }
  async findOneBy(id: number): Promise<UserRoleEntity | undefined | null> {
    return await this.userRoleRepository.findOneBy({id:id})
  }

  async findExisting(userId:number,roleId:number):Promise<UserRoleEntity|null> {
    return await this.userRoleRepository.findOneBy({
      userId:userId,
      roleId:roleId
    })
  }
  async create(createUserRoleDto: CreateUserRoleDto) {
    return this.userRoleRepository.save(createUserRoleDto);
  }


}
