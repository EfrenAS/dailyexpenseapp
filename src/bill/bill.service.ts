import { BillEntity } from './bill.entity'

export class BillService {
  findAllBills(): string {
    return 'All Bills from Bill Services'
  }

  findBillById({ id }: { id: string }): string {
    return 'Find a bill for Id'
  }

  createBill(data: BillEntity): string {
    return 'Created a Bill successfully'
  }

  updateBill(data: BillEntity): string {
    return 'A bill is updated'
  }

  deleteBill({ id }: { id: string }): string {
    return 'A bill was delete'
  }
}
