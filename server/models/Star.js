import mongoose from "mongoose"
const Schema = mongoose.Schema 
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema (
  {
    name: {type: String, required: true, minlength: 2, maxlength: 25},
    color: {type: String, required: true, minlength: 1, maxlength: 12},
    orbit: {type: Number, required: true, min: 0, max: 25},
    galaxyId: {type: ObjectId, required: true, ref: 'Galaxy'}
  }
)