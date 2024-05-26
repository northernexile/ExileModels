import {Factory,FactorizedAttrs} from '@jorgebodega/typeorm-factory';
import { connectionSource as dataSource } from '../../shared/utils/datasource'
import { RoleEntity as Role} from '../../entities/role.entity';

export class RoleFactory extends Factory<Role> {
  protected entity = Role
  protected dataSource = dataSource

  protected attrs(): FactorizedAttrs<Role> {
    return {
      name: '',
      createdAt:new Date(),
    }
  }
}