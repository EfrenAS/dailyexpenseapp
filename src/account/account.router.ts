import { BaseRouter } from '../config/base/base.router'
import { AccountController } from './account.controller'

export class AccountRouter extends BaseRouter<AccountController> {
  constructor () {
    super(AccountController)
  }

  routes (): void {
    this.router.get('/account', async (req, res) =>
      await this.controller.allAcounts(req, res)
    )

    this.router.get('/account/:id', (req, res) =>
      this.controller.getAccountById(req, res)
    )

    this.router.post('/account', async (req, res) =>
      await this.controller.newAccount(req, res)
    )

    this.router.patch('/account/:id', (req, res) =>
      this.controller.updateAccountById(req, res)
    )

    this.router.delete('/account/:id', (req, res) =>
      this.controller.deleteAccountById(req, res)
    )
  }
}
