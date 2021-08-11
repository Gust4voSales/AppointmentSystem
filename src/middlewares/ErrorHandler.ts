import { Response, Request, NextFunction } from 'express'
import GeneralErrorException from '../errors/GeneralError'

const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof GeneralErrorException) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    })
  }

  // 🚧🚧🚧🚧INTERNAL SERVER ERROR🚧🚧🚧🚧
  // HERE IS A GOOD PLACE TO CALL SOME LOGGER PASSING -> err.message
  console.log("---------------ERROR CONSOLE START---------------")
  console.log(err.name + ': ' + err.message)  
  console.log("---------------ERROR CONSOLE END-----------------")
  
  return res.status(500).json({
    status: 'error',
    // Not a good habit to inform the user of an internal error (can lead to vulnerabilities)
    message: 'Internal Server Error', 
  })
}

export default ErrorHandler
