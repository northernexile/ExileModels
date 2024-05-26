import { Seeder } from '@jorgebodega/typeorm-seeding';
import { UserRoleEntity } from '../../entities/user.role.entity';
import { DataSource, MongoRepository } from 'typeorm';
import { UserRoleFactory } from '../factories/user.role.factory';
import {UsersService} from '../../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import * as process from 'node:process';
import { RoleEntity } from '../../entities/role.entity';

class RoleSeeder extends Seeder {
  constructor(
    @InjectRepository(UserEntity)
    @InjectRepository(RoleEntity)
    private userRepository: MongoRepository<UserEntity>,
    private roleRepository: MongoRepository<RoleEntity>
  ) {
    super()
  }
  async run(dataSource: DataSource) {
    const userRoleList: any[] = []
    const roleFactory = new UserRoleFactory();
    let userId
    let roleId

    const user =  await this.userRepository.findOneBy({
      email:process.env.ADMIN_USER_EMAIL
    })
    if(user) {
      let userId = user.id

      const role = await this.roleRepository.findOneBy({
        name:'Admin'
      })

      if(role) {
        let roleId = role.id
      }
    }
    if(userId && roleId) {
      const primaryAdminUserRole = roleFactory.create({
        userId:userId,
        roleId:roleId
      })

      userRoleList.push(primaryAdminUserRole)

      await dataSource.createEntityManager().save<UserRoleEntity>(userRoleList);
    }
  }
}