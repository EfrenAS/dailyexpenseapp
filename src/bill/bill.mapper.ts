import { CreateBill, UpdatePartialBill } from './bill.schema'
import { BillEntity } from './bill.entity'
import { charges, typeBill } from '../utils/enums'

export const mapEmptyBillEntityToBillEmpty = (): BillEntity => {
  const emptyBill = new BillEntity()
  emptyBill.id ??= ''
  emptyBill.description ??= ''
  emptyBill.amount ??= 0
  emptyBill.comment ??= ''
  emptyBill.type_bill ??= typeBill.UKNOWN
  emptyBill.type_charge ??= charges.UKNOWN
  emptyBill.created_at ??= new Date()
  emptyBill.updated_at ??= new Date()
  return emptyBill
}

export const mapBillEntityToCreateBill = (bill: CreateBill): BillEntity => {
  const newBill = new BillEntity()
  newBill.description = bill.description
  newBill.amount = bill.amount
  newBill.comment = bill.comment
  newBill.account_id = bill.account_id
  newBill.type_bill = bill.typeBill
  newBill.type_charge = bill.typeCharge
  return newBill
}

export const mapBillEntityToUpdatePartialBill = (
  bill: BillEntity
): UpdatePartialBill => {
  const newBill = new BillEntity()
  newBill.description = bill.description
  newBill.amount = bill.amount
  newBill.comment = bill.comment
  newBill.account_id = bill.account_id
  newBill.type_bill = bill.type_bill
  newBill.type_charge = bill.type_charge
  return newBill
}
