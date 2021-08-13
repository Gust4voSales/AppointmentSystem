import { NextFunction, Request, Response } from "express";
import checkJwtFormat from "../utils/checkJwtFormat";
import jwt from 'jsonwebtoken'
import jwtConfig from '../config/jwt'
import NotAuthorizedException from "../errors/exceptions/NotAuthorized";


function ensureAdminAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  const token = checkJwtFormat(authHeader)
  
  //Token verification
  jwt.verify(token, jwtConfig.JWT_SECRET, (err, decoded) => {
    if (err)
      throw new NotAuthorizedException("Invalid token")

    req.admin_user_id = decoded.id
        
    return next()
  })
}

export default ensureAdminAuthenticated