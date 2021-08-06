import { getCustomRepository } from "typeorm"
import { AppointmentRepository } from "../repositories/AppointmentRepository"

class AppointmentService {
  async scheduleAppointment(user: string, service: string, dateTime: Date, employee: string) {
    const repository = getCustomRepository(AppointmentRepository)

    // console.log(dateTime.toLocaleString());
    
    const appointment = repository.create({
      user, service, dateTime, employee,
    })
    
    return await repository.save(appointment)
  }
}

export default new AppointmentService()