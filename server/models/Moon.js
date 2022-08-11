import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema (
{
  name: {type: String, required: true, minlength: 2, maxlength: 25},
  planetId: { type: ObjectId, required: true, ref: 'Planet'}
}
)