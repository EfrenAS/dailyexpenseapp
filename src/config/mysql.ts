import mysql, { Connection, ConnectionOptions, ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { Config } from './config'

export class MySQL {
  private readonly access: ConnectionOptions = Config

  async getConnection(): Promise<Connection> {
    try {
      return await mysql.createConnection(this.access)
    } catch (e) {
      throw new Error('Error al tratar de conectar con la base de datos')
    }
  }

  // For SELECT
  async execQuery({ queryToExec }: { queryToExec: string }): Promise<RowDataPacket[]> {
    try {
      const connection = await this.getConnection()
      const [resultQuery] = await connection.query<RowDataPacket[]>(queryToExec)
      return resultQuery
    } catch (e) {
      throw new Error('Error al tratar de consultar la Base de Datos')
    }
  }

  // For INSERT, DELETE, UPDATE
  async exectStatement(): Promise<[ResultSetHeader, any]> {
    try {
      const connection = await this.getConnection()
      return await connection.execute<ResultSetHeader>('INSERT INTO `users`(`id`, `username`, `email`, `password`) VALUES ((?), (?), (?), (?))', [
        'asdasd123123sa',
        'administrator',
        'admint.test@gmail.com',
        'admin'
      ])
    } catch (e) {
      throw new Error('Error al tratar de modificar la base de datos')
    }
  }
}
