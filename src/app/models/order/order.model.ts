import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerAddress: { type: String, required: true },
    productId: { type: Schema.Types.ObjectId, required: false, ref: 'Product' },
    transictionId:{ type: String, required: true },
   amount:{type:Number}
  
   
  },
  
  {
    timestamps:true
  }
  );
  
  export const Order = mongoose.model<TOrder>('Order', orderSchema);