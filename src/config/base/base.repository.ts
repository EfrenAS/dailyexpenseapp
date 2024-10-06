import { MySQL } from '../mysql'
import { SqlQueryBuilder } from '../../utils/sqlQueryBuilder'
import { ResultSetHeader } from 'mysql2'

export abstract class BaseRepository<T> {
  private readonly mysqlConnection: MySQL = new MySQL()
  private readonly tableName: string

  constructor (nameEntity: string) {
    this.tableName = nameEntity
  }

  abstract getColumns (): string[]

  abstract getValues (): string[]

  abstract getParams (): string[]

  async save (): Promise<ResultSetHeader> {
    try {
      const values = this.getValues()

      const query = new SqlQueryBuilder()
        .insertInto({ table: this.tableName, columns: this.getColumns() })
        .params(this.getParams())
        .build()
      const [result] = await this.mysqlConnection.exectStatement({ query, values })

      return result
    } catch (e) {
      throw new Error('No se pudo realizar crear el recurso em la base de datos.')
    }
  }

  update (params: T): void { }

  async findAll (): Promise<T[]> {
    try {
      const query = new SqlQueryBuilder()
        .select(this.getColumns())
        .from(this.tableName)
        .build()
      const selectResponse = await this.mysqlConnection.execQuery({ query })
      return selectResponse as T[]
    } catch (e) {
      throw new Error('No se pudo realizar la búsqueda en la tabla seleccionada')
    }
  }

  findByOne ({ id }: { id: string }): void { }

  delete ({ id }: { id: string }): void { }
}
