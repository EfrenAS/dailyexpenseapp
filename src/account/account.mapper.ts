import { CreateAccount, UpdatePartialAccount } from './account.schema'
import { AccountEntity } from './account.entity'
import { randomUUID } from 'node:crypto'

export const mapEmptyAccountEntityToAccountEmpty = (): AccountEntity => {
  const emptyAccount = new AccountEntity()
  emptyAccount.id ??= ''
  emptyAccount.account_number ??= ''
  emptyAccount.bank_name ??= ''
  emptyAccount.initial_amount ??= 0
  emptyAccount.owner_id ??= ''
  emptyAccount.updated_at ??= new Date()
  emptyAccount.created_at ??= new Date()
  return emptyAccount
}

export const mapAccountEntityToCreateAccount = (account: CreateAccount): AccountEntity => {
  const newAccount = new AccountEntity()
  newAccount.id = randomUUID()
  newAccount.account_number = account.account_number
  newAccount.bank_name = account.bank_name
  newAccount.initial_amount = account.initial_amount
  newAccount.owner_id = account.owner_id
  newAccount.created_at = new Date()
  newAccount.updated_at = new Date()
  return newAccount
}

export const mapAccountEntityToUpdatePartialAccount = (account: AccountEntity): UpdatePartialAccount => {
  const newAccount = new AccountEntity()
  newAccount.account_number = account.account_number
  newAccount.bank_name = account.bank_name
  newAccount.owner_id = account.owner_id
  newAccount.initial_amount = account.initial_amount
  return newAccount
}
