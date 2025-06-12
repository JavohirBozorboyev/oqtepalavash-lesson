import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: false,
  },
  description: {
    type: String,
    trim: true,
    required: false,
  },
  price: {
    type: String,
    trim: true,
    required: false,
  },
  image: {
    type: String,
    trim: true,
    required: false,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
