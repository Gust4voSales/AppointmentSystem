import { getCustomRepository, QueryFailedError, } from "typeorm"
import BadRequestException from "../errors/exceptions/BadRequest"
import NotFoundException from '../errors/exceptions/NotFound'
import { Appointment } from "../models/Appointment"
import { AppointmentRepository } from "../repositories/AppointmentRepository"
import { ServiceRepository } from "../repositories/ServiceRepository"


class AppointmentService {
  async scheduleAppointment(userId: string, serviceId: number, dateTime: Date, employee: string) {
    const repository = getCustomRepository(AppointmentRepository)
    const serviceRepo = getCustomRepository(ServiceRepository)

    // CHECK IF SERVICE EXISTS 
    const service = await serviceRepo.findOne(serviceId)
    if (!service)
      throw new BadRequestException("Invalid service")

    const appointment = repository.create({
      service_id: serviceId, dateTime, employee, client_user_id: userId
    })
    
    return await repository.save(appointment)
  }

  async cancelAppointment (id: string) {
    const repository = getCustomRepository(AppointmentRepository)
    
    try {
      const { affected } = await repository.delete(id)
    
      if (affected===0)
        throw new NotFoundException("Appointment not found")
    } catch (err) {
      if (err instanceof QueryFailedError) // invalid uuid passed
        throw new NotFoundException("Appointment not found")
      throw err      
    }
    
  }

  async getUserAppointments(userId: string) {
    const repository = getCustomRepository(AppointmentRepository)
 
    const appointments = await repository
      .createQueryBuilder("appointment")
      .select() // select everything from APPOINTMENT
      .addSelect("service.name") // select name from service
      .addSelect("service.duration") // select duration from service
      .where("appointment.client_user_id = :userId", { userId })
      .innerJoin("appointment.service", "service")
      .getMany()

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