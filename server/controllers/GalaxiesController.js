import { galaxyService } from "../services/GalaxyService";
import BaseController from '../utils/BaseController';


export class GalaxiesController extends BaseController { 
  constructor() {
    super('api/galaxy')
    this.router
    .get('', this.getGalaxies)
    .post('', this.createGalaxy)

  }

  async getGalaxies(req, res, next) {
    try {
      let galaxies = await galaxyService.getGalaxies()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      let galaxyData = req.body
      let galaxy = await galaxyService.createGalaxy()
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }


}
