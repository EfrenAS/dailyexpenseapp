import mysql, { Connection, ConnectionOptions, ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { Config } from './config'

export class MySQL {
  private readonly access: ConnectionOptions = Config

  async getConnection (): Promise<Connection> {
    try {
      return await mysql.createConnection(this.access)
    } catch (e) {
      throw new Error('Error al tratar de conectar con la base de datos')
    }
  }

  // For SELECT
  async execQuery ({ query }: { query: string }): Promise<RowDataPacket[]> {
    try {
      const connection = await this.getConnection()
      const [resultQuery] = await connection.query<RowDataPacket[]>(query)
      return resultQuery
    } catch (e) {
      throw new Error('Error al tratar de consultar la Base de Datos')
    }
  }

  // For INSERT, DELETE, UPDATE
  async exectStatement (
    {
      query,
      values
    }:
    { query: string
      values: string[]
    }
  ): Promise<[ResultSetHeader, any]> {
    try {
      const connection = await this.getConnection()
      return await connection.execute<ResultSetHeader>(query, values)
    } catch (e) {
      console.log(e)
      throw new Error('Error al tratar de modificar la base de datos')
    }
  }
}
