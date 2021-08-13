import { Column, Entity, PrimaryGeneratedColumn, Exclusion } from 'typeorm'

@Entity("admin_users")
export class AdminUser {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  name: string

  @Column("varchar")
  email: string

  @Column("varchar", { select: false })
  password: string
}