import {MigrationInterface, QueryRunner} from "typeorm";

export class ReplaceUserFirebaseUserID1628609882250 implements MigrationInterface {
    name = 'ReplaceUserFirebaseUserID1628609882250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."appointments" RENAME COLUMN "user" TO "client_user_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."appointments" RENAME COLUMN "client_user_id" TO "user"`);
    }

}
