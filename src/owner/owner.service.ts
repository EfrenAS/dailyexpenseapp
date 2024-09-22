import { OwnerEntity } from './owner.entity'
import { OwnerRepository } from './owner.repository'
import { mapEmptyOwnerEntityToOwnerEmpty } from '../utils/mappers'

export class OwnerService {
  async findAllOwners(): Promise<OwnerEntity[] | []> {
    const emptyOwner = mapEmptyOwnerEntityToOwnerEmpty()
    const ownerRepository = new OwnerRepository(emptyOwner)
    const ownersArray = await ownerRepository.findAll()
    return ownersArray
  }

  findOwnerById({ id }: { id: string }): string {
    return 'Find an Owner for Id'
  }

  createOwner(data: OwnerEntity): string {
    return 'Created a Owner successfully'
  }

  updateOwner(data: OwnerEntity): string {
    return 'An Owner is updated'
  }

  deleteOwner({ id }: { id: string }): string {
    return 'An Owner was delete'
  }
}
