import { BaseEntity } from '../config/base/base.entiy'
import { AccountEntity } from '../account/account.entity'

export class OwnerEntity extends BaseEntity {
  name!: string
  middle_name!: string
  lastname!: string
  phone!: number
  birthday!: Date
  address!: string
  account!: AccountEntity[]
}
