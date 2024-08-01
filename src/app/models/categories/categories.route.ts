import express from 'express'
import { CategoriesController } from './categories.controller'

const router= express.Router()


router.post('/create-categories',CategoriesController.createCategories)
router.get('/categories',CategoriesController.getAllCategories)
router.patch('/categories/:id',CategoriesController.updateCategories)
router.delete('/categories/:id',CategoriesController.deleteCategories)



export  const CategoriesRoutes=router