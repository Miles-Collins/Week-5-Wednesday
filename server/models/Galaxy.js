import mongoose from "mongoose"
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
  type: {type: String, required: true, minlength: 3, maxlength: 25},
  color: {type: String, minlength: 2, maxlength: 25}
}
)