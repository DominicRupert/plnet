import { planetsService } from "../services/PlanetsService.js";
import {moonsService} from "../services/MoonsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .get("/:id/moons", this.getMoons)
            .post("", this.create)
            .delete("/:id", this.remove);
    }

    async getAll(req, res, next) {
        try {
            let planets = await planetsService.getAll(req.query);
            return res.send(planets);
        } catch (error) {
            next(error);
        }
    }

    async getMoons(req, res, next) {
        try {
            let moons = await moonsService.getAll({ planetId: req.params.id });
            return res.send(moons);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            let planet = await planetsService.create(req.body);
            return res.send(planet);
        } catch (error) {
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            let message = await planetsService.remove(req.params.id);
            return res.send(message);
        } catch (error) {
            next(error);
        }
    }
}