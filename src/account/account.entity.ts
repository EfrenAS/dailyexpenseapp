import { BaseEntity } from '../config/base/base.entiy'
import { OwnerEntity } from '../owner/owner.entity'
import { BillEntity } from '../bill/bill.entity'

export class AccountEntity extends BaseEntity {
  account_number!: string
  bank_name!: string
  initial_amount?: number
  owner_id?: string
  owner!: OwnerEntity | null
  bill!: BillEntity[] | []
}

export const ACCOUNT_ENTITY = 'accounts'
export const PRIMARY_KEY_TO_UUID = true
