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

  async deleteService(id: number) {
    const repository = getRepository(Service)

    const result = await repository.delete(id)

    return result.affected
  }
}

export default new ServiceService()