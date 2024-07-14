import { Types } from "mongoose";

export type TOrder = {
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    productId:Types.ObjectId
    createdAt: Date;
  }