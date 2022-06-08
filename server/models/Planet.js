import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
    name: {type: String, required: true},
    starId : {type: ObjectId, ref: 'Star', required: true},
}, { timestamps: true, toJSON: { virtuals: true } })

