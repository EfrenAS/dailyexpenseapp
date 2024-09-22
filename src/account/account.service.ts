import { AccountEntity } from './account.entity'
import { AccountRepository } from './account.repository'
import { mapEmptyAccountEntityToAccountEmpty } from './account.mapper'

export class AccountService {
  async findAllAccounts(): Promise<AccountEntity[]> {
    const emptyAccount = mapEmptyAccountEntityToAccountEmpty()
    const accountRepository = new AccountRepository(emptyAccount)
    const acountsArray = await accountRepository.findAll()
    return acountsArray
  }

  findAccountById({ id }: { id: string }): string {
    return 'Find an account for Id'
  }

  createAccount(data: AccountEntity): string {
    return 'Created an account successfully'
  }

  updateAccount(data: AccountEntity): string {
    return 'An account was update'
  }

  deleteAccount({ id }: { id: string }): string {
    return 'An account was delete'
  }
}
