import { Request, Response } from 'express'
import { OwnerService } from './owner.service'

export class OwnerController {
  constructor(
    private readonly ownerService: OwnerService = new OwnerService()
  ) { }

  getAllOwners(req: Request, res: Response): void {
    const data = this.ownerService.findAllOwners()

    res.json({
      action: 'Success',
      msg: data
    })
  }

  getOwnerById(req: Request, res: Response): void {
    res.json({
      msg: 'Get an owner from Db by Id'
    })
  }

  createOwner(req: Request, res: Response): void {
    res.json({
      msg: 'Create a new Owner into DB'
    })
  }

  updateOwnerbyId(req: Request, res: Response): void {
    res.json({
      msg: 'Update an owner partially'
    })
  }

  deleteOwnerById(req: Request, res: Response): void {
    res.json({
      msg: 'Delete an owner of DB'
    })
  }
}
