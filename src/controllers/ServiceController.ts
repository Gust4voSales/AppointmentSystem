import { Request, Response } from "express"
import ServiceService from "../services/ServiceService"


interface ServiceData {
  name: string
  duration: number
}

class ServiceController {
  async store(req: Request, res: Response) {
    const { name, duration } = req.body as ServiceData

    const newService = await ServiceService.createService(name, duration)

    return res.status(201).json({ service: newService })
  }

  async index(req: Request, res: Response) {
    const services = await ServiceService.getServices()

    return res.status(200).json({ services })
  }
}


export default new ServiceController()