import { Types } from "mongoose";

export type TOrder = {
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    customerAddress: string;
    productId?:Types.ObjectId
    createdAt: Date;
    transictionId:string,
    phoneNumber:number,
    address:string,
    amount:number
  }