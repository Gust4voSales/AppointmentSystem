import { getCustomRepository } from "typeorm"
import { AppointmentRepository } from "../repositories/AppointmentRepository"

class AppointmentService {
  async scheduleAppointment(user: string, dateTime: Date, employee: string) {
    const repository = getCustomRepository(AppointmentRepository)

    // console.log(dateTime.toLocaleString());
    
    const appointment = repository.create({
      user, dateTime, employee,
    })
    
    return await repository.save(appointment)
  }
}

export default new AppointmentService()