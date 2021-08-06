import { getCustomRepository, } from "typeorm"
import NotFoundException from "../errors/exceptions/NotFound"
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

  async cancelAppointment (id: string) {
    const repository = getCustomRepository(AppointmentRepository)

    const result = await repository.delete(id)
      
    return result.affected;
  }

  async getUserAppointments(user: string) {
    const repository = getCustomRepository(AppointmentRepository)

    const appointments = await repository.find({ user, })

    return appointments
  }

  async getAppointmentDetails(id: string) {
    const repository = getCustomRepository(AppointmentRepository)

    const appointment = await repository.findOne(id)
    
    if (!appointment)
      throw new NotFoundException("Appointment not found")

    return appointment
  }
}

export default new AppointmentService()