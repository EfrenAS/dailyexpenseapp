export interface ConfigServer {
  type: string
  host: string
  port: number
  username: string
  password: string
  database: string
  connection: () => void
}
