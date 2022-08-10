import mongoose from "mongoose"
const Schema = mongoose.Schema 

export const StarSchema = new Schema (
  {
    name: {type: String, required: true, minlength: 2, maxlength: 25},
    color: {type: String, required: true, minlength: 1, maxlength: 12},
    orbit: {type: Number, required: true, min: 0, max: 25}
  }
)