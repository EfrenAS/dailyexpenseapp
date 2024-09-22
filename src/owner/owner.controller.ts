import { Request, Response } from 'express'
import { OwnerService } from './owner.service'
import { ownerSchema, partialOwnerSchema } from './owner.schema'
import { ZodError } from 'zod'

export class OwnerController {
  constructor(
    private readonly ownerService: OwnerService = new OwnerService()
  ) { }

  async getAllOwners(req: Request, res: Response): Promise<void> {
    const ownersSelected = await this.ownerService.findAllOwners()

    res.json({
      action: 'Success',
      body: ownersSelected
    })
  }

  getOwnerById(req: Request, res: Response): void {
    res.json({
      msg: 'Get an owner from Db by Id'
    })
  }

  createOwner(req: Request, res: Response): Response {
    try {
      const validateData = ownerSchema.parse(req.body)
      return res.status(201).json({
        msg: 'Create a new Owner into DB',
        data: validateData
      })
    } catch (e) {
      const zodError = e as ZodError
      return res.status(400).json(zodError.errors)
    }
  }

  updateOwnerbyId(req: Request, res: Response): Response {
    try {
      const validateData = partialOwnerSchema.parse(req.body)
      return res.json({
        msg: 'Create a new Owner into DB',
        data: validateData
      })
    } catch (e) {
      const zodError = e as ZodError
      return res.status(400).json(zodError.errors)
    }
  }

  deleteOwnerById(req: Request, res: Response): void {
    res.json({
      msg: 'Delete an owner of DB'
    })
  }
}
