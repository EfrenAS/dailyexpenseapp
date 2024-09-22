import { z } from 'zod'

export const ownerSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be string.',
    required_error: 'Name is required.'
  }).min(2, {
    message: ' Lenght min 2 characters.'
  }).trim(),
  middle_name: z.string({
    invalid_type_error: 'middlename must be string.'
  }).trim().optional(),
  lastname: z.string({
    invalid_type_error: 'lastname must be string.',
    required_error: 'Lastname is required.'
  }).min(2, {
    message: ' Lenght min 2 characters.'
  }).trim(),
  phone: z.number({
    invalid_type_error: 'Phone must be number',
    required_error: 'The phone number is required'
  }).int().positive().min(10, {
    message: 'The phone number cannot be less than 10 numbers.'
  }),
  birthday: z.string({
    required_error: 'The birthday must be required.',
    invalid_type_error: 'The birthday must be a valid date.'
  }).date(),
  address: z.string({
    invalid_type_error: 'Address must be string.',
    required_error: 'Address is required.'
  }).min(10, {
    message: 'Address cannot be less than 10 characters.'
  }).trim()
})

export const partialOwnerSchema = ownerSchema.partial()

export type CreateOwner = z.infer<typeof ownerSchema>
export type UpdatePartialOwner = z.infer<typeof partialOwnerSchema>
