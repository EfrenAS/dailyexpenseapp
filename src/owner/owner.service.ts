import { OwnerEntity } from './owner.entity'
import { OwnerRepository } from './owner.repository'
import { CreateOwner } from './owner.schema'
import { mapEmptyOwnerEntityToOwnerEmpty, mapOwnerEntityToCreateOwner } from './owner.mapper'

export class OwnerService {
  async findAllOwners (): Promise<OwnerEntity[] | []> {
    const emptyOwner = mapEmptyOwnerEntityToOwnerEmpty()
    const ownersArray = await new OwnerRepository(emptyOwner).findAll()

    return ownersArray
  }

  findOwnerById ({ id }: { id: string }): string {
    return 'Find an Owner for Id'
  }

  async createOwner (data: CreateOwner): Promise<OwnerEntity | null> {
    const newOwner = mapOwnerEntityToCreateOwner(data)
    const response = await new OwnerRepository(newOwner).save()

    if (response.affectedRows === 0) { return null }

    return newOwner
  }

  updateOwner (data: OwnerEntity): string {
    return 'An Owner is updated'
  }

  deleteOwner ({ id }: { id: string }): string {
    return 'An Owner was delete'
  }
}
