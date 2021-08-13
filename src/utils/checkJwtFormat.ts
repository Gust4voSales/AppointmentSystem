import NotAuthorizedException from "../errors/exceptions/NotAuthorized"

export default function checkJwtFormat(authHeader: string) {
  if (!authHeader) {
    throw new NotAuthorizedException('Request without token')
  }
  
  const parts = authHeader.split(' ')
  
  if (!(parts.length===2)) {
    throw new NotAuthorizedException('Authorization incomplete')
  }
    
  const [ scheme, token ] = parts
  
  if (!/Bearer$/i.test(scheme)) {
    throw new NotAuthorizedException('Token bad formatted')
  }

  return token
}
