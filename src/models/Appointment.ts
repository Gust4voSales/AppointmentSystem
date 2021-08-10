import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,} from "typeorm"
import { Service } from "./Service"

@Entity("appointments")
export class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("timestamp with time zone")
  dateTime: Date

  @Column("varchar")
  employee: string

  @Column("varchar")
  client_user_id: string

  @Column("int")
  service_id: number

  @OneToOne(() => Service)
  @JoinColumn({ name: "service_id" })
  service: Service

  /**
   * Use if you need your instaces of Users in your database (with a firebase UID as its id)
   */
  // @ManyToOne(() => ClientUser)
  // @JoinColumn({ name: "client_user_id" }) // REFERENCE TO COLUMN ABOVE
  // clientUser: ClientUser

}
