import {starsService} from '../services/StarsService.js';
import {planetsService} from '../services/PlanetsService.js';
import BaseController from '../utils/BaseController.js';



export class StarsController extends BaseController{
    constructor(){
        super('api/stars');
        this.router
            .get('', this.getAll)
            .get('/:id/planets', this.getPlanets)
            .post('', this.create)
            .delete('/:id', this.remove);
    }

    async getAll(req, res, next){
        try{
            let stars = await starsService.getAll(req.query);
            return res.send(stars);
        }catch(error){
            next(error);
        }
    }

    async getPlanets(req, res, next){
        try{
            let planets = await planetsService.getAll({starId: req.params.id});
            return res.send(planets);
        }catch(error){
            next(error);
        }
    }
    async create(req, res, next){
        try{
            let star = await starsService.create(req.body);
            return res.send(star);
        }catch(error){
            next(error);
        }
    }
    async remove(req, res, next){
        try{
          let message =  await starsService.remove(req.params.id);
            return res.send(message);
        }catch(error){
            next(error);
        }
    }
}