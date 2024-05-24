import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1716551620741 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name:'users',
              columns:[
                  {
                      name: 'id',
                      type: 'int',
                      isPrimary: true
                  },
                  {
                      name:'name',
                      type:'varchar'
                  },
                  {
                      name:'email',
                      type:'varchar'
                  },
                  {
                      name:'password',
                      type:'varchar'
                  },
                  {
                      name:'createdAt',
                      type:'varchar'
                  },
                  {
                      name:'updatedAt',
                      type:'varchar',
                      isNullable:true
                  }
              ],
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
