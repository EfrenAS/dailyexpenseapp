import { Router } from 'express'

// T => A generic Controller class
// U => A generic Middleware class

export class BaseRouter<T> {
  public router: Router
  protected controller: T
  // protected Middeware: M -----> will be implement

  constructor (TController: new () => T) {
    this.router = Router()
    this.controller = new TController()
    this.routes()
  }

  protected routes (): void { }
}
