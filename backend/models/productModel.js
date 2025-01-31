import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  colors: { type: Array, required: true },
  popular: { type: Boolean },
  date: { type: Number, required: true },
});

const prductModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default prductModel;
