import { Request, Response } from 'express'
import { AccountService } from './account.service'

export class AccountController {
  constructor (private readonly accountService: AccountService = new AccountService()) { }
  allAcounts (req: Request, res: Response): void {
    const data = this.accountService.findAllAccounts()
    res.json({
      action: 'Succes',
      accounts: data
    })
  }

  getAccountById (req: Request, res: Response): void {
    // TODO: Get an account by Id
    res.json({ msg: 'Get an account by Id' })
  }

  createAccount (req: Request, res: Response): void {
    // TODO: Create a new Account
    res.json({
      msg: 'Account create successfully'
    })
  }

  updateAccountById (req: Request, res: Response): void {
    // TODO: Get an account by Id
    res.json({ msg: 'Update an account by Id' })
  }

  deleteAccountById (req: Request, res: Response): void {
    // TODO: Delete Account by Id
    res.json({ msg: 'Delete an account by Id' })
  }
}
