import { Request, Response } from "express";
import AdminUserService from "../services/AdminUserService"

class AuthAdminController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body

    const { admin, token } =  await AdminUserService.signIn(email, password)

    return res.status(200).json({ admin, token })
  }
}

export default new AuthAdminController()