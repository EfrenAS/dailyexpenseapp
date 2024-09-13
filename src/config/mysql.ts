import mysql, { Connection, ConnectionOptions, ResultSetHeader } from 'mysql2/promise'
import { Config } from './config'

export class MySQL<T extends ResultSetHeader> {
  private readonly access: ConnectionOptions = Config

  async getConnection(): Promise<Connection> {
    try {
      return await mysql.createConnection(this.access)
    } catch (e) {
      throw new Error('Error al tratar de conectar con la base de datos')
    }
  }

  // async getQuery() { }

  // For SELECT
  async execQuery(): Promise<T[]> {
    try {
      const connection = await this.getConnection()
      const [resultQuery] = await connection.query<T[]>('SELECT * FROM `users`;')
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
