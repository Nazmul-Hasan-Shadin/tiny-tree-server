import { TCategories } from "./categories.interface"
import { Categories } from "./categories.model"


const createCategoriesIntoDb=async (category:TCategories)=>{
     
     const result= await Categories.create(category)
     return result
}


const getAllCategoriesFromDb=async (categoryId:string)=>{
     
     if (categoryId) {
        const result= await Categories.findById(categoryId)
        return result
     }
    const result= await Categories.find()
    return result
}

const updateCategoriesIntoDb=async (id:string,updatedCategories:TCategories)=>{
    console.log(updatedCategories);
    
     
    const result= await Categories.findByIdAndUpdate(id,updatedCategories,{new:true})
    console.log(result);
    
    return result
}

const deleteCategoriesFromDb=async (categoryId:string)=>{
 
     
    const result= await Categories.findByIdAndDelete(categoryId,{new:true})
    console.log(result);
    
    return result
}


export const CategoriesServices= {
    createCategoriesIntoDb,
    getAllCategoriesFromDb,
    deleteCategoriesFromDb,
    updateCategoriesIntoDb
}