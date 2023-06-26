import express from 'express';
const router= express.Router();
import {getProducts,getCustomers,getTransactions} from "../controllers/client.js"
export default router;

router.get('/products',getProducts)
router.get('/customers',getCustomers)
router.get('/transactions',getTransactions)