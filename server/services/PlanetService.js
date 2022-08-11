import { dbContext } from "../db/DbContext"

class PlanetsService {
  async getStarsByStarId(starsId) {
    let star = await dbContext.Planet.find({starsId})
    return star
  } 
  async getPlanets() {
    let planets = await dbContext.Planet.find()
    return planets
  }

  async createPlanet(planetData) {
    let planet = await dbContext.Planet.create(planetData)
    return planet
  }
}





export const planetsService = new PlanetsService