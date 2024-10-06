import { CreateOwner, UpdatePartialOwner } from '../owner/owner.schema'
import { OwnerEntity, PRIMARY_KEY_TO_UUID } from '../owner/owner.entity'
import { randomUUID } from 'node:crypto'

export const mapEmptyOwnerEntityToOwnerEmpty = (): OwnerEntity => {
  const emptyOwner = new OwnerEntity()
  emptyOwner.id ??= ''
  emptyOwner.name ??= ''
  emptyOwner.middle_name ??= ''
  emptyOwner.lastname ??= ''
  emptyOwner.phone ??= 0
  emptyOwner.birthday ??= ''
  emptyOwner.address ??= ''
  emptyOwner.created_at ??= new Date()
  emptyOwner.updated_at ??= new Date()
  return emptyOwner
}

export const mapOwnerEntityToCreateOwner = (owner: CreateOwner): OwnerEntity => {
  const newOwner = new OwnerEntity()
  newOwner.id = (PRIMARY_KEY_TO_UUID) ? randomUUID() : ''
  newOwner.name = owner.name
  newOwner.middle_name = owner.middle_name
  newOwner.lastname = owner.lastname
  newOwner.phone = owner.phone
  newOwner.birthday = owner.birthday
  newOwner.address = owner.address
  newOwner.created_at = new Date()
  newOwner.updated_at = new Date()
  return newOwner
}

export const mapOwnerEntityToUpdatePartialOwner = (owner: OwnerEntity): UpdatePartialOwner => {
  const updatedOwner = new OwnerEntity()
  updatedOwner.name = owner.name
  updatedOwner.middle_name = owner.middle_name
  updatedOwner.lastname = owner.lastname
  updatedOwner.phone = owner.phone
  updatedOwner.birthday = owner.birthday
  updatedOwner.address = owner.address
  updatedOwner.updated_at = new Date()
  return updatedOwner
}
