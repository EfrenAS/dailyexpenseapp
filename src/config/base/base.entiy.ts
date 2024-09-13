import { RowDataPacket } from 'mysql2/promise'

export interface BaseEntity extends RowDataPacket {
  id: string
  created_att: Date
  updated_at: Date
}
