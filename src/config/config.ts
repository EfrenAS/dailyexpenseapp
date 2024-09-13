import { DataSource } from './data.source'

export const Config: DataSource = {
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) ?? 3306,
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? 'Fu11St@ck',
  database: process.env.DB_NAME ?? 'dailyexpenseapp'
}
