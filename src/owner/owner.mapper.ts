import { CreateOwner, UpdatePartialOwner } from '../owner/owner.schema'
import { OwnerEntity } from '../owner/owner.entity'

export const mapEmptyOwnerEntityToOwnerEmpty = (): OwnerEntity => {
  const emptyOwner = new OwnerEntity()
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
  const newOwner = new OwnerEntity()
  newOwner.name = owner.name
  newOwner.middle_name = owner.middle_name
  newOwner.lastname = owner.lastname
  newOwner.phone = owner.phone
  newOwner.birthday = owner.birthday
  newOwner.address = owner.address
  newOwner.updated_at = new Date()
  return newOwner
}
