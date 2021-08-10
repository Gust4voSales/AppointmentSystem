import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm"

@Entity("appointments")
export class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  service: string

  @Column("timestamp with time zone")
  dateTime: Date

  @Column("varchar")
  employee: string

  @Column("varchar")
  client_user_id: string

  /**
   * Use if you need your instaces of Users in your database (with a firebase UID as its id)
   */
  // @ManyToOne(() => ClientUser)
  // @JoinColumn({ name: "client_user_id" }) // REFERENCE TO COLUMN ABOVE
  // clientUser: ClientUser


}
