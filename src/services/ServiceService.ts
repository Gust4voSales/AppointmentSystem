import { getRepository, } from "typeorm"
import { Service } from "../models/Service"

class ServiceService {
   async createService(name: string, duration: number) {
    const repository = getRepository(Service)
  
    const newService = repository.create({ name, duration })
    
    return await repository.save(newService)
  }
}

export default new ServiceService()