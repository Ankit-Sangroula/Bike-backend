import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
}, { timestamps: true });

export const Bike = mongoose.model("Bike", bikeSchema);
