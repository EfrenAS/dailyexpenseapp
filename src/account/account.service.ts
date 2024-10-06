import { AccountEntity } from './account.entity'
import { AccountRepository } from './account.repository'
import { mapAccountEntityToCreateAccount, mapEmptyAccountEntityToAccountEmpty } from './account.mapper'
import { CreateAccount } from './account.schema'

export class AccountService {
  async findAllAccounts (): Promise<AccountEntity[]> {
    const emptyAccount = mapEmptyAccountEntityToAccountEmpty()
    const accountRepository = new AccountRepository(emptyAccount)
    const acountsArray = await accountRepository.findAll()
    return acountsArray
  }

  findAccountById ({ id }: { id: string }): string {
    return 'Find an account for Id'
  }

  async createAccount (data: CreateAccount): Promise<AccountEntity | null> {
    const newAccount = mapAccountEntityToCreateAccount(data)
    const response = await (new AccountRepository(newAccount)).save()

    if (response.affectedRows === 0) {
      return null
    }

    return newAccount
  }

  updateAccount (data: AccountEntity): string {
    return 'An account was update'
  }

  deleteAccount ({ id }: { id: string }): string {
    return 'An account was delete'
  }
}
