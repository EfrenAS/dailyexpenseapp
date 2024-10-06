import { BaseRepository } from '../config/base/base.repository'
import { OwnerEntity, OWNER_ENTITY, PRIMARY_KEY_TO_UUID } from './owner.entity'

export class OwnerRepository extends BaseRepository<OwnerEntity> {
  constructor (private readonly ownerEntity: OwnerEntity) {
    super(OWNER_ENTITY)
  }

  getColumns (): string[] {
    const columns = Object.keys(this.ownerEntity)
    if (this.ownerEntity.id === '' && PRIMARY_KEY_TO_UUID) {
      columns[0] = 'BIN_TO_UUID(id) AS id'
    }

    return columns
  }

  getValues (): string[] {
    return Object.values(this.ownerEntity)
  }

  getParams (): string [] {
    const paramsTotal = this.getValues().length
    const params = Array(paramsTotal).fill('?')

    if (PRIMARY_KEY_TO_UUID) {
      params[0] = 'UUID_TO_BIN(?)'
    }

    return params
  }
}
