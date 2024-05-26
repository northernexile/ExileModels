import { faker } from '@faker-js/faker'
import {Factory,FactorizedAttrs} from '@jorgebodega/typeorm-factory';
import { connectionSource as dataSource } from '../../shared/utils/datasource'
import { UserRoleEntity as UserRole} from '../../entities/user.role.entity';

export class UserRoleFactory extends Factory<UserRole> {
  protected entity = UserRole
  protected dataSource = dataSource

  protected attrs(): FactorizedAttrs<UserRole> {
    return {
      userId:faker.number.int().toString(),
      roleId:faker.number.int().toString(),
      createdAt:new Date(),
    }
  }
}