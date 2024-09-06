import { z } from 'zod'
import { typeBill as enumBills, charges } from '../utils/enums'

export const billSchema = z.object({
  description: z.string({
    invalid_type_error: 'Must description must be string',
    required_error: 'description is required'
  }).trim().min(5, {
    message: ' Description min five characters'
  }),
  amount: z.number({
    invalid_type_error: 'Must description must be number',
    required_error: 'Amount is required'
  }).positive({
    message: 'The amount can not negative number'
  }).min(1, {
    message: 'Amount min is $1 dollar'
  }),
  comment: z.string({
    invalid_type_error: 'Must comment must be string'
  }).trim().optional(),
  account: z.string({
    invalid_type_error: 'Must account must be string',
    required_error: 'Account is required'
  }),
  typeBill: z.nativeEnum(enumBills, {
    required_error: 'Especific a type bill please',
    invalid_type_error: 'The bill is not a valid type'
  }
  ),
  typeCharge: z.nativeEnum(
    charges,
    {
      required_error: 'Especific a type bill please',
      invalid_type_error: 'The bill is not a valid charge'
    }
  )
})

export const partialbillSchema = billSchema.partial()
