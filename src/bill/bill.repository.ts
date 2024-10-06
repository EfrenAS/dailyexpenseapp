import { BaseRepository } from '../config/base/base.repository'
import { BillEntity, BILL_ENTITY } from './bill.entity'

export class BillRepository extends BaseRepository<BillEntity> {
  constructor (private readonly billEntity: BillEntity) {
    super(BILL_ENTITY)
  }

  getColumns (): string[] {
    return Object.keys(this.billEntity)
  }

  getValues (): string[] {
    return Object.values(this.billEntity)
  }

  getParams (): string [] {
    const params = ['']
    return params
  }
}
