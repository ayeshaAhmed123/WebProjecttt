const express = require('express');
const productRouter = express.Router();

const { Authenticate,checkSeller } = require('../controllers/authController');
const {create,updateProduct,delProduct,getProductofSeller,getAllProduct,findProductByName,findProductWithCategory,findProductWithCategoryHome}=require("../controllers/productController");

// Get all products of seller
productRouter.get('/get/:id',Authenticate,checkSeller,getProductofSeller );

//get all products
productRouter.get('/get',getAllProduct );
//Get a all product of similar category
productRouter.get('/search/:category', findProductWithCategoryHome);
// Create a product
// Get a single product by name
productRouter.get('/searchName/:name',Authenticate,checkSeller,findProductByName );

// Get a all product of similar category of seller
productRouter.get('/searchCat/:category',Authenticate,checkSeller,findProductWithCategory );



productRouter.post('/create',Authenticate,checkSeller, create );

// Update a product
productRouter.put('/update/:id',Authenticate,checkSeller, updateProduct);

// Delete a product
productRouter.delete('/delete/:id',Authenticate,delProduct );

module.exports = productRouter;
//const express = require('express');


// GET all users
