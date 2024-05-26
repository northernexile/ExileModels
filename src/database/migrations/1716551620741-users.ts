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
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: "increment"
                  },
                  {
                      name:'username',
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
                      type:'timestamp',
                      default:'now()'
                  },
                  {
                      name:'updatedAt',
                      type:'timestamp',
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
