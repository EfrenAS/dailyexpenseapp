import { BaseRepository } from '../config/base/base.repository'
import { OwnerEntity, OWNER_ENTITY } from './owner.entity'

export class OwnerRepository extends BaseRepository<OwnerEntity> {
  constructor(private readonly ownerEntity: OwnerEntity) {
    super(OWNER_ENTITY)
  }

  getColumns(): string[] {
    return Object.keys(this.ownerEntity)
  }

  getParams(): string[] {
    return ['id', 'name', 'middle_name', 'lastname', 'phone', 'birthday', 'address']
  }
}
