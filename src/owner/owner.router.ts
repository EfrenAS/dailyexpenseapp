import { BaseRouter } from '../config/base/base.router'
import { OwnerController } from './owner.controller'

export class OwnerRouter extends BaseRouter<OwnerController> {
  constructor () {
    super(OwnerController)
  }

  routes (): void {
    this.router.get('/owner', async (req, res) => await this.controller.getAllOwners(req, res))
    this.router.get('/owner/:id', async (req, res) => this.controller.getOwnerById(req, res))
    this.router.post('/owner', async (req, res) => await this.controller.createOwner(req, res))
    this.router.patch('/owner/:id', (req, res) => this.controller.updateOwnerbyId(req, res))
    this.router.delete('/owner/:id', (req, res) => this.controller.deleteOwnerById(req, res))
  }
}
