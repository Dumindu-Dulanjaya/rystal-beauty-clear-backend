import express from 'express';
import { createProduct, getProducts } from '../controllers/productController.js';

const productRouter = express.Router();

// POST - Create new product
productRouter.post("/", createProduct);

// GET - Retrieve all products
productRouter.get("/", getProducts);

export default productRouter;