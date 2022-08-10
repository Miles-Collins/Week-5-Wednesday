import mongoose from "mongoose";
const Schema = mongoose.Schema

export const MoonSchema = new Schema (
{
  name: {type: String, required: true, minlength: 2, maxlength: 25}
}
)