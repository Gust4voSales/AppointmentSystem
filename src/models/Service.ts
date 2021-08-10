import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, } from 'typeorm'

@Entity("services")
export class Service {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column("varchar")
  name: string

  @Column("float")
  duration: number

}