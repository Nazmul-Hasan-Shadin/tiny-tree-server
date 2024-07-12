
import { Response } from "express";

 export const sendResponse= <T>(res:Response,data:{
    success:boolean,
    message?:string,
    statusCode:number,
    data:T
    
})=> {
     res.status(data.statusCode).json({
        success:true,
        statusCode:data.statusCode | 400,
        message:data.message,
        data:data.data
     })
    }

