import { getRepository, } from "typeorm"
import { Service } from "../models/Service"

class ServiceService {
   async createService(name: string, duration: number) {
    const repository = getRepository(Service)
  
    const newService = repository.create({ name, duration })
    
    return await repository.save(newService)
  }

  async getServices() {
    const repository = getRepository(Service)
    
    return await repository.find()
  }

}

export default new ServiceService()