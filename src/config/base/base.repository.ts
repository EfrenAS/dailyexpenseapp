import { MySQL } from '../mysql'
import { SqlQueryBuilder } from '../../utils/sqlQueryBuilder'

export abstract class BaseRepository<T> {
  private readonly mysqlConnection: MySQL = new MySQL()
  private readonly tableName: string

  constructor(nameEntity: string) {
    this.tableName = nameEntity
  }

  abstract getColumns(): string[]

  abstract getParams(): string[]

  create(params: T): void { }

  update(params: T): void { }

  async findAll(): Promise<T[]> {
    try {
      const query = new SqlQueryBuilder()
        .select(this.getColumns())
        .from(this.tableName)
        .build()
      const selectResponse = await this.mysqlConnection.execQuery({ queryToExec: query })
      return selectResponse as T[]
    } catch (e) {
      throw new Error('No se pudo realizar la búsqueda en la tabla seleccionada')
    }
  }

  findByOne({ id }: { id: string }): void { }

  delete({ id }: { id: string }): void { }
}
