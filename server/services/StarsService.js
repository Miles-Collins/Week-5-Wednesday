import { dbContext } from "../db/DbContext"



class StarsService {

  async getStarsByStarId(galaxyId) {
    let stars = await dbContext.Star.find({galaxyId})
    return stars
  }

  async getStars() {
    let stars = await dbContext.Star.find()
    return stars
  }

  async createStar(starData) {
    let star = await dbContext.Star.create(starData)
    return star
  }

}



export const starsService = new StarsService()