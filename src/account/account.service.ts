import { AccountEntity } from './account.entity'

export class AccountService {
  findAllAccounts(): string {
    return 'All Accounts from Account Services'
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
