import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm'
import bcrypt from 'bcrypt'

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

  @BeforeInsert()
  async hashPassword() {
    const hash = await bcrypt.hash(this.password, 8) // encypted password
    
    this.password = hash
  }
}