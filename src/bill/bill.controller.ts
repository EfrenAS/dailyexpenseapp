import { Request, Response } from 'express'
import { BillService } from './bill.service'

export class BillController {
  constructor(
    private readonly billService: BillService = new BillService()
  ) { }

  getAllBills(req: Request, res: Response): void {
    const bills = this.billService.findAllBills()
    res.json({
      action: 'success',
      msg: bills
    })
  }

  getBillById(req: Request, res: Response): void {
    // TODO: Implement code for Get All Users of DB
    res.json({
      msg: 'Get A Bill from DB by Id'
    })
  }

  createBill(req: Request, res: Response): void {
    // TODO: Implement code for create a new Bill on DB
    res.json({
      msg: 'Create a new Bill on DB'
    })
  }

  updateBillById(req: Request, res: Response): void {
    // TODO: Implement code for update a Bill by Id
    res.json({
      msg: 'Update a bill on DB'
    })
  }

  deleteBillById(req: Request, res: Response): void {
    // TODO: Implement code for Delete a Bill by Id on DB
    res.json({
      msg: 'Delete a bill of DB'
    })
  }
}
