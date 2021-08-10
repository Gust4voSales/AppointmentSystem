import { getCustomRepository, } from "typeorm"
import NotFoundException from "../errors/exceptions/NotFound"
import { AppointmentRepository } from "../repositories/AppointmentRepository"


class AppointmentService {
  async scheduleAppointment(userId: string, service: number, dateTime: Date, employee: string) {
    const repository = getCustomRepository(AppointmentRepository)

    // CHECK IF SERVICE EXISTS 

    const appointment = repository.create({
      service_id: service, dateTime, employee, client_user_id: userId
    })
    
    return await repository.save(appointment)
  }

  async cancelAppointment (id: string) {
    const repository = getCustomRepository(AppointmentRepository)

    const result = await repository.delete(id)
      
    return result.affected;
  }

  async getUserAppointments(userId: string) {
    const repository = getCustomRepository(AppointmentRepository)

    const appointments = await repository.find({ client_user_id: userId, })
    // const appointments = await repository
    //   .createQueryBuilder()

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