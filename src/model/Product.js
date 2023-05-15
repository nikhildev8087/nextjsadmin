import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  category: { type: String, require: true },
  orders: { type: Number, require: true },
  stock: { type: Number, require: true },
  rating: { type: Number, require: true },
  description: { type: String, require: true },
  codeSnippet: { type: String, require: true },
  price: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
