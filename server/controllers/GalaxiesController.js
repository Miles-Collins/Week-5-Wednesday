import { galaxyService } from "../services/GalaxyService";
import { starsService } from "../services/StarsService";
import BaseController from '../utils/BaseController';


export class GalaxiesController extends BaseController { 
  constructor() {
    super('api/galaxy')
    this.router
    .get('', this.getGalaxies)
    .get('/:galaxyId/stars', this.getGalaxyStarByStarId)
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

  async getGalaxyStarByStarId(req, res, next) {
    try {
      let stars = await starsService.getStarsByStarId(req.params.galaxyId)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }



}
