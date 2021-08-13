declare namespace Express {
  interface Request {
    user?: {
      name?: string
      uid: string
      picture?: string
      email?: string
      email_verified?: boolean
      firebase: {
        sign_in_provider: string
      }
    }
    
    admin_user_id?: string
  }
}