import { planetsService } from "../services/PlanetService";
import BaseController from '../utils/BaseController';

export class PlanetsController extends BaseController { 
  constructor() {
    super('api/planets')
    this.router
    .get('', this.getPlanets)
    .post('', this.createPlanet)
  }

  async getPlanets(req, res, next) {
try {
  let planets = await planetsService.getPlanets()
  res.send(planets)
} catch (error) {
  next(error)
}    
  }
  async createPlanet(req, res, next) {
try {
  let planetData = req.body
  let planet = await planetsService.createPlanet(planetData)
  res.send(planet)
} catch (error) {
  next(error)
}    
  }
}
