import { Request, Response } from 'express'

export class AuthController {
  login(req: Request, res: Response): void {
    // TODO: Implement code for login module
    res.send({
      msg: 'Login successfully'
    })
  }

  logout(req: Request, res: Response): void {
    // TODO: Implement code for logout module
    res.send({
      msg: 'Logout successfully'
    })
  }

  register(req: Request, res: Response): void {
    // TODO: Implement code for create an account for use the app
    res.send({
      msg: 'User is registered successfully'
    })
  }

  getProfileById(req: Request, res: Response): void {
    // TODO: Implement code for get info a profile
    res.send({
      msg: 'Complete info of a Profile'
    })
  }
}
