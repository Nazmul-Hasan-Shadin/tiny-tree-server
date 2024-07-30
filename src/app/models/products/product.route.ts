import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductController.createProduct);
router.get("/products/:id", ProductController.getSingleProduct);
router.get("/products", ProductController.getAllProduct);

router.patch("/update-product/:id", ProductController.updateroduct);
router.patch("/update-product-quantity", ProductController.updatePdoductQuantity);
router.delete("/delete-product/:id", ProductController.deleteProductIntoDb);

export const ProductRoutes = router;
