import { BaseEntity } from '../config/base/base.entiy'
import { charges, typeBill } from '../utils/enums'

export class BillEntity extends BaseEntity {
  description!: string
  amount!: number
  comment?: string
  account_id!: string
  type_bill!: typeBill
  type_charge!: charges
}

export const BILL_ENTITY = 'bill'
export const PRIMARY_KEY_TO_UUID = true
