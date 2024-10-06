import { BaseRepository } from '../config/base/base.repository'
import { AccountEntity, ACCOUNT_ENTITY } from './account.entity'

export class AccountRepository extends BaseRepository<AccountEntity> {
  constructor (private readonly accountEntity: AccountEntity) {
    super(ACCOUNT_ENTITY)
  }

  getColumns (): string[] {
    return Object.keys(this.accountEntity)
  }

  getValues (): string[] {
    return Object.values(this.accountEntity)
  }

  getParams (): string[] {
    return Object.keys(this.accountEntity)
  }
}
