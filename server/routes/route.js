import express from 'express';
import { addPaymentGateway , paytmResponse } from '../controller/paymentController.js';
import { getProductById, getProducts } from '../controller/productController.js';
import { userLogin, userSignup } from '../controller/userController.js';

const router = express.Router();

router.post('/signup' , userSignup);
router.post('/login' , userLogin);

router.get('/products' , getProducts);
router.get('/product/:id' , getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paytmResponse);

export default router;