import { NextFunction, Request, Response } from 'express';
import firebaseAdm from '../config/firebase'
import NotAuthorizedException from '../errors/exceptions/NotAuthorized';
import checkJwtFormat from '../utils/checkJwtFormat';

const authFirebase = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  const token = checkJwtFormat(authHeader)

  try {
    // Use firebase-admin auth to verify the token passed in from the client header.
    // This is token is generated from the firebase client
    // Decoding this token returns the userpayload and all the other token claims you added while creating the custom token
    const userPayload = await firebaseAdm.auth().verifyIdToken(token)

    req.user = userPayload
    console.log(userPayload);
    
    next()
  } catch (error) {
    throw new NotAuthorizedException("Invalid token")
  }
}

export default authFirebase