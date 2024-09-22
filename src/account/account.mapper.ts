import { CreateAccount, UpdatePartialAccount } from './account.schema'
import { AccountEntity } from './account.entity'

export const mapEmptyAccountEntityToAccountEmpty = (): AccountEntity => {
  const emptyAccount = new AccountEntity()
  emptyAccount.id ??= ''
  emptyAccount.account_number ??= ''
  emptyAccount.bank_name ??= ''
  emptyAccount.initial_amount ??= 0
  emptyAccount.updated_at ??= new Date()
  emptyAccount.created_at ??= new Date()
  return emptyAccount
}

export const mapAccountEntityToCreateAccount = (account: CreateAccount): AccountEntity => {
  const newAccount = new AccountEntity()
  newAccount.account_number = account.account_number
  newAccount.bank_name = account.bank_name
  newAccount.initial_amount = account.initial_amount
  return newAccount
}

export const mapAccountEntityToUpdatePartialAccount = (account: AccountEntity): UpdatePartialAccount => {
  const newAccount = new AccountEntity()
  newAccount.account_number = account.account_number
  newAccount.bank_name = account.bank_name
  newAccount.initial_amount = account.initial_amount
  return newAccount
}
