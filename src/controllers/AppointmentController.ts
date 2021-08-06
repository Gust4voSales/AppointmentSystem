import { Request, Response } from "express";
import AppointmentService from "../services/AppointmentService";

class AppointmentController {
  async store(req: Request, res: Response) {
    const { user, service, dateTime, employee } = req.body 

    const parsedTime = new Date(dateTime)

    const appointment = await AppointmentService.scheduleAppointment(user, service, parsedTime, employee)
  
    return res.status(201).json({ appointment })
  }

}

export default new AppointmentController()