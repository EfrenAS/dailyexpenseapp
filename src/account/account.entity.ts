import { BaseEntity } from '../config/base/base.entiy'
import { OwnerEntity } from '../owner/owner.entity'
import { BillEntity } from '../bill/bill.entity'

export interface AccountEntity extends BaseEntity {
  account_number: string
  bank_name: string
  initial_amount: number
  owner: OwnerEntity
  bill: BillEntity[]
}
