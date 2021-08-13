import { getRepository } from "typeorm"
import BadRequestException from "../errors/exceptions/BadRequest"
import { AdminUser } from "../models/AdminUser"
import bcrypt from 'bcrypt'
import NotAuthorizedException from "../errors/exceptions/NotAuthorized"

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

  async signIn(email: string, password: string) {
    const repository = getRepository(AdminUser)

    const admin = await repository
      .createQueryBuilder("admin_user")
      .select()
      .addSelect("admin_user.password") // include password
      .where("admin_user.email = :email", { email })
      .getOne()
    
    if (!admin) { // email not found
      throw new NotAuthorizedException("Email ou senha inválido")
    }
    
    if (!await bcrypt.compare(password, admin.password)) { // password doesn't match
      throw new NotAuthorizedException("Email ou senha inválido")
    }

    // GENERATE TOKEN
  

    admin.id = undefined
    admin.password = undefined
  
    return { admin, token: '' }
  }
}


export default new AdminUserService()