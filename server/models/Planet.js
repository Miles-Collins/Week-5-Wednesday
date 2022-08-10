import mongoose from "mongoose"
const Schema = mongoose.Schema

export const PlanetSchema = new Schema (
  {
    name: {type: String, required: true, minlength: 2, maxlength: 25},
    moons: {type: Number, required: true, min: 0 , max: 10},
    life: {type: Boolean, required: true}
  }
)