import { sqlVerbs } from './enums'

export class SqlQueryBuilder {
  private query: string
  private readonly hasWhereClause: boolean
  private readonly columns: string[] | null
  private table: string | null

  constructor() {
    this.query = ''
    this.hasWhereClause = false
    this.columns = null
    this.table = null
  }

  select(columns: string[]): this {
    const columnList = columns.join(', ')
    this.query = `${sqlVerbs.SELECT} ${columnList}`
    return this
  }

  from(table: string): this {
    this.table = table
    this.query += ` FROM ${this.table}`
    return this
  }

  where({ condition }: { condition: string }): this {
    this.query += ` WHERE ${condition}`
    return this
  }

  build(): string {
    return this.query + ';'
  }
}
