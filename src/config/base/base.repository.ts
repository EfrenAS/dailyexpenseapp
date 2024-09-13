import { ResultSetHeader } from 'mysql2/promise'
import { MySQL } from '../mysql'

export abstract class BaseRepository<T extends ResultSetHeader> {
  private readonly mysql: MySQL<T> = new MySQL<T>()

  private readonly table: string = ''

  get tableName(): string {
    return 'bill'
  }

  get query(): string {
    return 'Query'
  }

  create(): void { }

  update(): void { }

  async findAll(): Promise<T[]> {
    try {
      const dataSelected = await this.mysql.execQuery()
      return dataSelected
    } catch (e) {
      throw new Error('Error al tratar de conectar con la Base de Datos')
    }
  }

  findByOne(): void { }

  delete(): void { }
}
