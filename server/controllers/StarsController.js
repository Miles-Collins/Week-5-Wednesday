import { planetsService } from "../services/PlanetService";
import { starsService } from "../services/StarsService";
import BaseController from '../utils/BaseController';

export class StarsController extends BaseController { 
  constructor(){
    super('api/stars')
    this.router
    .post('', this.createStar)
    .get('/:starId/planets', this.getStarsPlanetsById)

  }

  async createStar(req, res, next) {
    try {
      let starData = req.body
      let star = await starsService.createStar(starData)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getStarsPlanetsById(req, res, next) {
    try {
      let planets = await planetsService.getStarsByStarId(req.params.starsId)
    } catch (error) {
      next(error)
    }
  }

}
