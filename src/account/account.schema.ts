import { z } from 'zod'

export const accountSchema = z.object({
  account_number: z.string({
    invalid_type_error: 'account number must be string',
    required_error: 'account number must be require'
  }).length(8, {
    message: 'The account number is 8 lenght'
  }).trim(),
  bank_name: z.string(
    {
      invalid_type_error: 'Bank name must be string',
      required_error: 'Bank name must be require'
    }
  ).min(4, {
    message: 'The bank name cannot be less than 4 characters.'
  }).trim(),
  initial_amount: z.number({
    invalid_type_error: 'initial amount must be number'
  }).optional(),
  owner_id: z.string({
    invalid_type_error: 'owner id must be string',
    required_error: 'Owner id is required'
  })
})

export const partialAccountSchema = accountSchema.partial()
