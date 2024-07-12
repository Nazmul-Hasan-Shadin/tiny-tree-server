import mongoose, { Schema } from "mongoose";
import { TProduct } from "./products.interface";

const ProductSchema = new Schema<TProduct>({
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  });
  
  // Create the Product model
  const Product = mongoose.model<TProduct>('Product', ProductSchema);
  
  export default Product;