import GeneralErrorException from "../GeneralError"

export default class NotAuthorizedException extends GeneralErrorException {
  constructor(message: string) {
    super(message)
    this.code = 401
  }
}