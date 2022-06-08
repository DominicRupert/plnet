import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema({
    name: {type: String, required: true},
    classification: {type: String, required: true},
    
