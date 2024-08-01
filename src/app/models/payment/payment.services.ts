import stripe from "../order/order.const";

const createPaymentIntend = async(price:number) => {
  const priceamount = Math.round(price * 100);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: priceamount,
    currency: "usd",
    payment_method_types:['card']
  });

  return paymentIntent
};




export const PaymentServices={
    createPaymentIntend
}
