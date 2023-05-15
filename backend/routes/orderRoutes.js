const express = require('express');
const orderRouter = express.Router();
const { Authenticate,checkSeller } = require('../controllers/authController');
const getOrderOfSeller=require("../controllers/orderController");

// Get all products
orderRouter.get('/get/:id',Authenticate,checkSeller,getOrderOfSeller );

module.exports = orderRouter;
