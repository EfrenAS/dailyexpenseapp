import { BaseRouter } from '../config/base.router'
import { BillController } from './bill.controller'

export class BillRouter extends BaseRouter<BillController> {
  constructor() {
    super(BillController)
  }

  routes(): void {
    this.router.get('/bill', (req, res) =>
      this.controller.getAllBills(req, res)
    )

    this.router.get('/bill/:id', (req, res) =>
      this.controller.getBillById(req, res)
    )

    this.router.post('/bill', (req, res) =>
      this.controller.createBill(req, res)
    )

    this.router.patch('/bill/:id', (req, res) =>
      this.controller.updateBillById(req, res)
    )

    this.router.delete('/bill/:id', (req, res) =>
      this.controller.deleteBillById(req, res)
    )
  }
}
