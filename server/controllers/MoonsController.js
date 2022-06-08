import { moonsService } from "../services/MoonsService.js";
import BaseController from "../utils/BaseController.js";


export class MoonsController extends BaseController {
    constructor() {
        super("api/moons");
        this.router
            .get("", this.getAll)
            // .get("/:id", this.getSpecies)
            .post("", this.create)
            .delete("/:id", this.remove);
    }
    async getAll(req, res, next) {
        try {
            let moons = await moonsService.getAll(req.query);
            return res.send(moons);
        } catch (error) {
            next(error);
        }
    }
    // async getSpecies(req, res, next) {
    //     try {
    //         let species = await speciesService.getAll({ moonId: req.params.id });
    //         return res.send(species);
    //     } catch (error) {
    //         next(error);
    //     }
    // }
    async create(req, res, next) {
        try {
            let moon = await moonsService.create(req.body);
            return res.send(moon);
        } catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            let message = await moonsService.remove(req.params.id);
            return res.send(message);
        } catch (error) {
            next(error);
        }
    }
}
