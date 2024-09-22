import { Request, Response } from 'express'
import { BillService } from './bill.service'
import { billSchema, partialbillSchema } from './bill.schema'
import { ZodError } from 'zod'

export class BillController {
  constructor(
    private readonly billService: BillService = new BillService()
  ) { }

  async getAllBills(req: Request, res: Response): Promise<void> {
    const bills = await this.billService.findAllBills()
    console.log(bills)
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

  createBill(req: Request, res: Response): Response {
    try {
      const validatedData = billSchema.parse(req.body)
      return res.status(201).json({
        msg: 'Data is validated successfully',
        data: validatedData
      })
    } catch (e) {
      const zodError = e as ZodError
      return res.status(400).json(zodError.errors)
    }
  }

  updateBillById(req: Request, res: Response): Response {
    try {
      const validateData = partialbillSchema.parse(req.body)
      return res.json({
        msg: 'Update a bill on DB',
        data: validateData
      })
    } catch (e) {
      const zodError = e as ZodError
      return res.status(400).json(zodError.errors)
    }
  }

  deleteBillById(req: Request, res: Response): void {
    // TODO: Implement code for Delete a Bill by Id on DB
    res.json({
      msg: 'Delete a bill of DB'
    })
  }
}
