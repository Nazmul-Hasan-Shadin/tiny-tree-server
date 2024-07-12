import express from 'express'
import { ProductRoutes } from './app/models/products/product.route'

const app= express()

app.use(express.json())

app.use('/api/v1',ProductRoutes)



export default app