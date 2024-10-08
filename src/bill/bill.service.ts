import { BillEntity } from './bill.entity'
import { BillRepository } from './bill.repository'
import { mapEmptyBillEntityToBillEmpty } from './bill.mapper'

export class BillService {
  async findAllBills (): Promise<BillEntity[]> {
    const emptyBill = mapEmptyBillEntityToBillEmpty()
    const billRepository = new BillRepository(emptyBill)
    const response = await billRepository.findAll()
    return response
  }

  findBillById ({ id }: { id: string }): string {
    return 'Find a bill for Id'
  }

  createBill (data: BillEntity): string {
    return 'Created a Bill successfully'
  }

  updateBill (data: BillEntity): string {
    return 'A bill is updated'
  }

  deleteBill ({ id }: { id: string }): string {
    return 'A bill was delete'
  }
}
