const express = require('express');
const orderRouter = express.Router();
const { Authenticate,checkSeller } = require('../controllers/authController');
const {getOrderOfSeller,getOrderCustomer,getOrderProduct}=require("../controllers/orderController");

// Get all products
orderRouter.get('/get/:id',Authenticate,checkSeller,getOrderOfSeller );

orderRouter.get('/getCustomer/:id',Authenticate,checkSeller,getOrderCustomer );

orderRouter.get('/getProduct/:id',Authenticate,checkSeller,getOrderProduct );

module.exports = orderRouter;
