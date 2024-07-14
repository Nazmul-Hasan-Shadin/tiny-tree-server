import express from 'express'
import { ProductRoutes } from './app/models/products/product.route'
import { OrderRoutes } from './app/models/order/order.routes'
import cors from 'cors'

const app= express()

app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(express.json())

app.use('/api/v1',ProductRoutes)
app.use('/order',OrderRoutes)


export default app