import { dbContext } from "../db/DbContext";

class MoonsService {
  async getMoonByPlanetId(planetId) {
    let moon = await dbContext.Planet.find({planetId})
    return moon
  } 
  async getMoons() {
    let moons = await dbContext.Moon.find()
    return moons
  }

  async createMoon(moonData) {
    let moon = await dbContext.Moon.create(moonData)
    return moon
  }
}

export const moonsService = new MoonsService()
