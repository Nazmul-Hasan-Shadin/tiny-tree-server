import { TOrder } from "./order.interface"
import { Order } from "./order.model"

const createOrderIntoDb=async(payload:TOrder)=>{
    console.log(payload);
    
    const result= await Order.create(payload)
    
    return result
}

export const OrderServices={
    createOrderIntoDb
}