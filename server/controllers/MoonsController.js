import { moonsService } from "../services/MoonsService";
import BaseController from '../utils/BaseController';



export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
    .get('', this.getMoons)
    .post('', this.createMoon)
  }

async getMoons(req, res, next) {
  try {
    let moons = await moonsService.getMoons()
    res.send(moons)
  } catch (error) {
    next(error)
  }
}
async createMoon(req, res, next) {
  try {
    let moonData = req.body 
    let moon = await moonsService.createMoon(moonData)
    res.send(moon)
  } catch (error) {
    next(error)
  }
}
 }
