import express from 'express'
import { ProductRoutes } from './app/models/products/product.route'
import { OrderRoutes } from './app/models/order/order.routes'
import cors from 'cors'
import { PaymentRoutes } from './app/models/payment/payment.route'
import globalErrorMiddleware from './app/middleware/globalErrorMiddleware'
import { CategoriesRoutes } from './app/models/categories/categories.route'

const app= express()

app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(express.json())



app.use('/api/v1',ProductRoutes)
app.use('/api/v1/payment',PaymentRoutes)
app.use('/api/v1',OrderRoutes)
app.use('/api/v1',CategoriesRoutes)
app.use(globalErrorMiddleware)

 
app.get('/',(req,res)=>{
 res.send('server is running')
})


export default app