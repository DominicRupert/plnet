import {dbContext} from '../db/DbContext';



class StarsService{
    async getAll(query = {}){
        return await dbContext.Stars.find(query);
    }
    async create(body){
        return await dbContext.Stars.create(body);

    }
    async remove(id){
        let original = await dbContext.Stars.findById(id);
        await original.remove();
        return `deleted ${original.name}`;
}


async getByGalaxyId(id){
    return await dbContext.Stars.find({galaxyId: id});
}}

export const starsService = new StarsService();