import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema({
  star: { type: String, required: true },
  mass: { type: Number, required: true },
  age: { type: Number, required: true },
  imgUrl: { type: String, required: true }
})
