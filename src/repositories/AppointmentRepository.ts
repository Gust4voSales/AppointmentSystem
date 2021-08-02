import { EntityRepository, Repository } from "typeorm"
import {Appointment} from '../models/Appointment'

@EntityRepository(Appointment) 
export class AppointmentRepository extends Repository<Appointment> {
}