import express from 'express'
import { OrderController } from './order.controller'
import validateRequest from '../../middleware/validateRequest'
import { zodValidationOrdeSchema } from './order.validation'


const router= express.Router()

router.post('/orders',validateRequest(zodValidationOrdeSchema) ,OrderController.createOrder)
 

export const OrderRoutes=router