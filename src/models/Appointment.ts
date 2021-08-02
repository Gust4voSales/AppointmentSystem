import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm";

@Entity("appointments")
export class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column("varchar")
  user: string

  @Column("timestamp with time zone")
  dateTime: Date

  @Column("varchar")
  employee: string
}
