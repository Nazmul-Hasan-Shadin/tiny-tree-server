import { Schema, model } from "mongoose";
import { TCategories } from "./categories.interface";


const categoriesSchema= new Schema<TCategories>({
    name:{
        type:String,
        required:[true,'Categories is required'],
        unique:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})



export  const Categories=model<TCategories>('Category',categoriesSchema)