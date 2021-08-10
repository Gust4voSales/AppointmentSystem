import { Request, Response } from "express";
import AppointmentService from "../services/AppointmentService";

class AppointmentController {
  async store(req: Request, res: Response) {
    const { service, dateTime, employee } = req.body 

    const parsedTime = new Date(dateTime)

    const appointment = await AppointmentService.scheduleAppointment(req.user.uid, service, parsedTime, employee)
  
    return res.status(201).json({ appointment })
  }

  async index(req: Request, res: Response) {
    // const user: string  = req.query.user as string

    const appointments = await AppointmentService.getUserAppointments(req.user.uid)

    return res.status(200).json({ appointments })
  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    const appointment = await AppointmentService.getAppointmentDetails(id)

    return res.status(200).json({ appointment })
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params

    const deleted = await AppointmentService.cancelAppointment(id)

    return res.status(200).json({ deleted })
  }
}

export default new AppointmentController()