import express from 'express';
import { insertProduct, removeProduct, retrieveAllProduct, retrieveProduct } from '../controllers/ProductController.js';

// Always declare variables (use const)
const ProductRouter = express.Router();

// Use route paths starting with "/" (not "./")
ProductRouter.post('/addproduct', insertProduct);
ProductRouter.delete('/removeproduct/:id', removeProduct);
ProductRouter.get('/retrieve-all-product', retrieveAllProduct);
ProductRouter.get('/retriev-product/:id', retrieveProduct);

// Export the router
export default ProductRouter;
