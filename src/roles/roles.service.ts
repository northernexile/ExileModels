import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import {CreateRoleDto} from '../dto/role/create.role';
import {RoleEntity} from '../entities/role.entity';
import {MongoRepository} from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity) private roleRepository:MongoRepository<RoleEntity>
  ) {}

  async findOneBy(name: string):Promise<RoleEntity|undefined|null>{
    return await this.roleRepository.findOneBy({name:name})
  }

  async create(createRoleDto:CreateRoleDto) {
    return this.roleRepository.save(createRoleDto);
  }
}