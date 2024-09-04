import { BaseEntity } from '../config/base/base.entiy'
import { AccountEntity } from '../account/account.entity'
import { charges, typeBill } from '../utils/enums'

export class BillEntity extends BaseEntity {
  descritpion!: string
  amount!: number
  comment!: string
  acount!: AccountEntity
  typeBill!: typeBill
  typeCharge!: charges
}
