import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'

class StarsService {
  async create(body) {
    const star = await dbContext.Stars.create(body)
    return star
  }

  async getById(id) {
    const star = await dbContext.Stars.findById(id)
    if (!star) {
      throw new BadRequest('A Star is not Born')
    }
  }
}

export const starsService = new StarsService()
