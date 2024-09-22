import { Request, Response } from 'express'
import { AccountService } from './account.service'
import { ZodError } from 'zod'
import { accountSchema, partialAccountSchema } from './account.schema'

export class AccountController {
  constructor(
    private readonly accountService: AccountService = new AccountService()
  ) { }

  async allAcounts(_req: Request, res: Response): Promise<void> {
    const response = await this.accountService.findAllAccounts()
    res.json({
      action: 'Success',
      body: response
    })
  }

  getAccountById(req: Request, res: Response): void {
    // TODO: Get an account by Id
    res.json({ msg: 'Get an account by Id' })
  }

  createAccount(req: Request, res: Response): Response {
    try {
      const validatedData = accountSchema.parse(req.body)
      return res.status(201).json({
        msg: 'Account create successfully',
        data: validatedData
      })
    } catch (e) {
      const zodError = e as ZodError
      return res.status(400).send(zodError.errors)
    }
  }

  updateAccountById(req: Request, res: Response): Response {
    try {
      const validatedData = partialAccountSchema.parse(req.body)
      return res.json({
        msg: 'Account update successfully',
        data: validatedData
      })
    } catch (e) {
      const zodError = e as ZodError
      return res.status(400).send(zodError.errors)
    }
  }

  deleteAccountById(req: Request, res: Response): void {
    // TODO: Delete Account by Id
    res.json({ msg: 'Delete an account by Id' })
  }
}
