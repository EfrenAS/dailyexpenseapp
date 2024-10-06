import { sqlVerbs } from './enums'

export class SqlQueryBuilder {
  private query: string
  private readonly hasWhereClause: boolean

  constructor () {
    this.query = ''
    this.hasWhereClause = false
  }

  params (params: string[]): this {
    this.query += ` VALUES ( ${params.join(', ')} )`
    return this
  }

  columns (columnList: string[]): string {
    const columns = columnList.join(', ')
    return columns
  }

  insertInto ({ table, columns }: { table: string, columns: string[] }): this {
    this.query = `${sqlVerbs.INSERT} INTO ${table} ( ${this.columns(columns)} )`
    return this
  }

  select (columns: string[]): this {
    this.query = `${sqlVerbs.SELECT} ${this.columns(columns)}`
    return this
  }

  from (table: string): this {
    this.query += ` FROM ${table}`
    return this
  }

  where ({ condition }: { condition: string }): this {
    this.query += ` WHERE ${condition}`
    return this
  }

  build (): string {
    return this.query + ';'
  }
}
