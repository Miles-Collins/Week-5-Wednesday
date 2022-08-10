import { dbContext } from "../db/DbContext"

class GalaxyService {
  async getGalaxies() {
    let galaxies = await dbContext.Galaxy.find()
    return galaxies
  }

  async createGalaxy(galaxyData) {
    let galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }

}


export const galaxyService = new GalaxyService()