import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema (
  {
    name: {type: String, required: true, minlength: 2, maxlength: 25},
    moons: {type: Number, required: true, min: 0 , max: 10},
    life: {type: Boolean, required: true},
    // starId: {type: ObjectId, required: true, ref: 'Star'}
  }
)