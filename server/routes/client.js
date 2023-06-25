import express from 'express';
const router= express.Router();
import {getProducts,getCustomers} from "../controllers/client.js"
export default router;

router.get('/products',getProducts)
router.get('/customers',getCustomers)