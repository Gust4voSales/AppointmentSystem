import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm";

@Entity("appointments")
export class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column("varchar")
  user: string

  @Column("varchar")
  service: string

  @Column("timestamp with time zone")
  dateTime: Date

  @Column("varchar")
  employee: string
}
