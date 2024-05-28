import { ConflictException, HttpStatus, Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import {CreateUserRoleDto } from '../../dto/user/role/create.user.role';
import {UserRoleEntity } from '../../entities/user.role.entity';
import { Equal, MongoRepository } from 'typeorm';
import { CreateUserDto } from '../../dto/user/create.user';

@Injectable()
export class UsersRolesService {
  constructor(
    @InjectRepository(UserRoleEntity)
    private userRoleRepository: MongoRepository<UserRoleEntity>,
  ) { }
  async findOneBy(id: number): Promise<UserRoleEntity | undefined | null> {
    return await this.userRoleRepository.findOneBy({id:id})
  }

  async findRolesByUserId(userId:number) {
    return  await this.userRoleRepository.find({
      where: { userId: Equal(userId) },
    })
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

  async addRole(userId:number,roleId:number) {
    const exists = this.userRoleRepository.findOne({
      where:{
        userId:userId,
        roleId:roleId
      }
    })

    if( !exists ) {
      const dto: CreateUserRoleDto = {
        userId:userId,
        roleId:roleId,
        createdAt:new Date()
      }
      return this.userRoleRepository.create(dto)
    }

    throw new ConflictException({
      code:HttpStatus.CONFLICT,
      message:'User already has this role'
    })
  }

  async deleteRole(userId:number,roleId:number){
    const userRole = await this.userRoleRepository.findOneBy({
      userId:userId,
      roleId:roleId
    })

    if(userRole) {
      const deleted = await this.userRoleRepository.deleteOne({
        where:{
          id:userRole.id
        }
      })

      if( deleted) {
        return true
      }
    }

    return false
  }
}
