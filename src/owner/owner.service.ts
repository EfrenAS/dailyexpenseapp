import { OwnerEntity } from './owner.entity'

export class OwnerService {
  findAllOwners(): string {
    return 'All Owners from Owner Services'
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
