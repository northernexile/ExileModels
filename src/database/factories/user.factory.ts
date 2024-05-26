import { faker } from '@faker-js/faker'
import {Factory,FactorizedAttrs} from '@jorgebodega/typeorm-factory';
import { connectionSource as dataSource } from '../../shared/utils/datasource'
import { UserEntity as User} from '../../entities/user.entity';

export class UserFactory extends Factory<User> {
  protected entity = User
  protected dataSource = dataSource

  protected attrs(): FactorizedAttrs<User> {
    return {
      username: faker.person.firstName(),
      email: faker.internet.email(),
      password:'',
      createdAt:new Date(),
    }
  }
}