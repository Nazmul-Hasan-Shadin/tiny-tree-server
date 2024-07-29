import express from 'express'
import { PaymentServices } from './payment.services'
import { PaymentController } from './payment.controller'

const router=express.Router()



//     const { items } = req.body;
  
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: calculateOrderAmount(items),
//       currency: "usd",
//       // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });
  
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   });

 router.post('/create-payment-intent',PaymentController.paymentIntend)



export const PaymentRoutes=router