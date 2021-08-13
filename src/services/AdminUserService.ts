import { getRepository } from "typeorm"
import BadRequestException from "../errors/exceptions/BadRequest"
import { AdminUser } from "../models/AdminUser"

class AdminUserService {
  async signUp(name: string, email: string, password: string) {
    const repository = getRepository(AdminUser)

    // CHECK IF ADMIN EMAIL ALREADY EXISTS
    const exists = !!await repository.findOne({ email })
    if (exists) {
      throw new BadRequestException("Email já em uso")
    }

    const adminUser = repository.create({ name, email, password })
    await repository.save(adminUser)
    
    adminUser.password = undefined
    
    return adminUser   
  }
}

export default new AdminUserService()