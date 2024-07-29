import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import handleZodValidateError from "../errors/zodValidationError";

const globalErrorMiddleware=(err:any,req:Request,res:Response,next:NextFunction)=>{
     let statusCode= err.statusCode | 500
     let message= err.message  || 'Something went wrong'
    let errorSource= [
        {
            path:'',
            message:err.message
        }
     ]

    //  console.log(err)

     if (err instanceof ZodError) {
        const mangaeError=handleZodValidateError(err)
        statusCode=mangaeError.statusCode,
        message=mangaeError.message,
        errorSource=mangaeError.errorSource
     }



     res.status(404).json({
        statusCode,
        message,
        errorSource
        
     })
     
}

export default globalErrorMiddleware