import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class FileEntities1717004480289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'file_entities',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'fileId',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'entityId',
            type: 'bigint',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('file_entities');
  }
}
