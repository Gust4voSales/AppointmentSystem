import { NextFunction, Request, Response } from 'express';
import firebaseAdm from '../config/firebase'

const authFirebase = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  if (!authorization) {
    return res.status(401).json({
      error: {
        message: 'You did not specify any Token for this request'
      }
    })
  }
  const token = authorization.split(' ')[1]
  console.log(token);
  try {
    // Use firebase-admin auth to verify the token passed in from the client header.
    // This is token is generated from the firebase client
    // Decoding this token returns the userpayload and all the other token claims you added while creating the custom token
    const userPayload = await firebaseAdm.auth().verifyIdToken(token)

    // req.user = userPayload
    console.log(userPayload);
    
    next()
  } catch (error) {
    return res.status(500).json({
      error
    })
  }
}

export default authFirebase