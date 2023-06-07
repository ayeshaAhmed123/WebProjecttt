//first it get the products that are sold by the seller 

const orderModel = require('../models/orderModel'); 
const orderItemModel = require('../models/orderItem');
const productModel = require('../models/productModel');
const customerModel=require('../models/customerModel')
const getOrderOfSeller = async (req, res) => {
  try {
    console.log("inside the seller orders")
    // Get seller ID from request parameters
    const sellerId = req.params.id;
console.log(sellerId)
    // Find all products of a seller 
    const products = await productModel.find({ seller_id: sellerId }); 
    console.log(products)
    // Extract product IDs from products array
    const productIds = products.map(product => product._id); 
    const orderItems = await orderItemModel.find({ product_id: { $in: productIds } });
    const orderIds= orderItems.map(orderitem => orderitem.order_id );
    const uniqueorder = [...new Set(orderIds)];
    const finalOrders= await orderModel.find({ _id: { $in: uniqueorder } });
    // Find all orders containing products sold by the seller
    res.json({finalOrders,orderItems}); // Send orders data as response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOrderCustomer = async (req, res) => {
  try {
    // Get order ID from request parameters
    console.log("inside")
    const orderid = req.params.id;
    const Order= await orderModel.findOne({ _id: orderid });
    const customer=await customerModel.findOne({_id:Order.customer_id})
    console.log("outside")
    res.json({customer}); // Send orders data as response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
const getOrderProduct = async (req, res) => {
  try {
    // Get order ID from request parameters
    const productid = req.params.id;
    const orderItems = await orderItemModel.find({ product_id: productid });
    const orderIds= orderItems.map(orderitem => orderitem.order_id );
    const uniqueorder = [...new Set(orderIds)];
    const finalOrders= await orderModel.find({ _id: { $in: uniqueorder } });
    const finalOrdersId=finalOrders.map(orderitem => orderitem._id );
    const orderItemsfinal = await orderItemModel.find({ order_id: { $in: finalOrdersId } });
    console.log("OrderItem",orderItemsfinal)
    res.json({finalOrders,orderItemsfinal}); // Send orders data as response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {getOrderOfSeller,getOrderCustomer,getOrderProduct};
