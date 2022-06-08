import { dbContext } from "../db/DbContext.js";


class PlanetsService{
    async getAll(query = {}){
        return await dbContext.Planets.find(query);
}
async create(body){
    return await dbContext.Planets.create(body);
}
async remove(id){
    let original = await dbContext.Planets.findById(id);
   await original.remove();
   return `deleted ${original.name}`;
    }

async getByStarId(id){
    return await dbContext.Planets.find({starId: id});



}
}

export const planetsService = new PlanetsService();