import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointment1627938796919 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "appointments",
			columns: [
				{
					name: "id",
					type: "uuid",
					isPrimary: true,
					isGenerated: true,
					generationStrategy: "uuid",
				},
				{
					name: "user",
					type: "varchar",
				},
				{
					name: "service",
					type: "varchar",
				},
				{
					name: "dateTime",
					type: "timestamp with time zone",
				},
				{
					name: "employee",
					type: "varchar",
				},
			],
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("appointments")
	}
}
