import { BaseRepository } from '../config/base/base.repository'
import { AccountEntity, ACCOUNT_ENTITY } from './account.entity'

export class AccountRepository extends BaseRepository<AccountEntity> {
  constructor(private readonly accountEntity: AccountEntity) {
    super(ACCOUNT_ENTITY)
  }

  getColumns(): string[] {
    return Object.keys(this.accountEntity)
  }

  getParams(): string[] {
    return ['id', 'account_number', 'bank_name', 'initial_amount']
  }
}
