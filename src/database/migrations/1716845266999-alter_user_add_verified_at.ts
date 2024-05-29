import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserAddVerifiedAt1716845266999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'verifiedAt',
        type: 'timestamp',
        isNullable: true,
        default: null,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `users` DROP COLUMN `verifiedAt`');
  }
}
