import { starsService } from '../services/StarsService.js'
import BaseController from '../utils/BaseController'
export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .post('', this.create)
      .get('/:id', this.getById)
  }

  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const star = starsService.getById(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
