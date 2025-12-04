import express from 'express';
import { createProduct } from '../controllers/productController';

const productRouter = express.Router();

// POST - Create new product
productRouter.post("/", createProduct);

export default productRouter;