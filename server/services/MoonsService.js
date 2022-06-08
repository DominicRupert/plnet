import { dbContext } from "../db/DbContext.js";

class MoonsService{
    async getAll(query = {}){
        return await dbContext.Moons.find(query);
    }
    async create(body){
        return await dbContext.Moons.create(body);
    }
    async remove(id){
        let original = await dbContext.Moons.findById(id);
       await original.remove();
       return `deleted ${original.name}`;
        }
        async getByPlanetId(id){
            return await dbContext.Moons.find({planetId: id});
        }
}

export const moonsService = new MoonsService();