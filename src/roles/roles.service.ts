import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import {CreateRoleDto} from '../dto/role/create.role';
import {RoleEntity} from '../entities/role.entity';
import {MongoRepository} from 'typeorm';
import { UpdateRoleDto } from '../dto/role/update.role';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity) private roleRepository:MongoRepository<RoleEntity>
  ) {}

  async findOneBy(name: string):Promise<RoleEntity|undefined|null>{
    return await this.roleRepository.findOneBy({name:name})
  }

  async findAll() {
    return await this.roleRepository.find()
  }

  async findOneById(id:number) {
    return await this.roleRepository.findOneBy({id:id})
  }

  async getGuestRole() :Promise<RoleEntity|undefined|null>{
    return this.findOneBy('Guest')
  }

  async create(createRoleDto:CreateRoleDto) {
    return this.roleRepository.save(createRoleDto);
  }

  async update(id:number,payload:UpdateRoleDto) {
    let result:any = false;
    const role =  this.roleRepository.create({
      updatedAt:new Date(),
      name:payload.name
    })
    if(await this.roleRepository.update(id,role)) {
      result = role
    }

    return result
  }

  async delete(id:number) {
    let deleted = false
    const role = await this.roleRepository.findOneBy({id:id});
    if (role) {
      await this.roleRepository.delete(id)
      deleted = true
    }

    return deleted
  }
}