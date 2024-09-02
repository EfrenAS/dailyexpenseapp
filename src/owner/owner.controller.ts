import { Request, Response } from 'express'

export class OwnerController {
  getAllOwners(req: Request, res: Response): void {
    res.json({
      msg: 'Get all owners from DB'
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
