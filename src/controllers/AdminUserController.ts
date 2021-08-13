import { Request, Response } from "express"
import AdminUserService from "../services/AdminUserService"

class AdminUserController {
  async store(req: Request, res: Response) {
    const { name, email, password, } = req.body

    const admin = await AdminUserService.signUp(name, email, password)

    return res.status(201).json({ admin })
  }
}

export default new AdminUserController()