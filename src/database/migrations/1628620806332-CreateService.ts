import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateService1628620806332 implements MigrationInterface {
	name = 'CreateService1628620806332'
	
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "services",
			columns: [
				{
					name: "id",
					type: "int",
					isPrimary: true,
					isGenerated: true,
					generationStrategy: "increment",
				},
				{
					name: "name",
					type: "varchar"
				},
				{
					name: "duration",
					type: "float"
				},
			]
		}))
	}
	
	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "services"`);
	}
	
}
