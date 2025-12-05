import express from 'express';
import { createProduct, getProducts ,deleteProduct,updateProduct} from '../controllers/productController.js';

const productRouter = express.Router();

// POST - Create new product
productRouter.post("/", createProduct);

// GET - Retrieve all products
productRouter.get("/", getProducts);

// DELETE - Delete a product    
productRouter.delete("/:productId", deleteProduct);

// PUT - Update a product   
productRouter.put("/:productId", updateProduct);

export default productRouter;

