import { BaseRouter } from '../config/base/base.router'
import { AuthController } from './auth.controller'

export class AuthRouter extends BaseRouter<AuthController> {
  constructor() {
    super(AuthController)
  }

  routes(): void {
    this.router.post('/auth/login', (req, res) =>
      this.controller.login(req, res)
    )
    this.router.post('/auth/register', (req, res) =>
      this.controller.register(req, res)
    )
    this.router.post('/auth/logout', (req, res) =>
      this.controller.logout(req, res)
    )
    this.router.get('/auth/profile', (req, res) =>
      this.controller.getProfileById(req, res)
    )
  }
}
