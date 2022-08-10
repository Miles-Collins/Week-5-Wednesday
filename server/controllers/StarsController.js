import { starsService } from "../services/StarsService";
import BaseController from '../utils/BaseController';

export class StarsController extends BaseController { 
  constructor(){
    super('api/galaxy')
    this.router
    .get('', this.getStars)
    .post('', this.createStar)

  }

  async getStars(req, res, next) {
    try {
      let stars = await starsService.getStars()
      res.send(stars)
    } catch (error) {
      next(error)
    }
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
}
