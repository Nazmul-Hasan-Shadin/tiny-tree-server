import { z } from "zod";

export const zodValidationOrdeSchema = z.object({
    body:z.object({
        customerName: z.string().min(1, "Customer name is required"),
        customerPhone: z.string().min(1, "Customer phone is required"),
        customerEmail: z.string().email("Invalid email address"),
        customerAddress: z.string().min(1, "Customer address is required"),
        productId: z.string().optional(), // Assuming productId is an ObjectId string
        transictionId: z.string().min(1, "Transaction ID is required"),
        amount: z.number().optional(), // Assuming amount is a number and not required
    
      })
    
})



