const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();
const sellerModel=require("../models/sellerModel");

const Authenticate = (req, res, next) => {
  // Extract the token from the request header
  const token = req.headers.authorization.split(' ')[1];
  
  // Verify the token and decode the payload
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (!err) {
      // If the token is valid, save the decoded payload in the request object
      req.token = decoded;
      console.log(decoded);
      req.ID=decoded.id;
     // req.role=decoded.role;
      next();
    } else {
      // If the token is invalid, return an error message
      res.status(403).json({ token: token, message: 'Not authorized' });
    }
  });
};

// Middleware to check if user is an employee
const checkSeller = async (req, res, next) => {
  // Check if the decoded user object has the type property set to "Employee"
  try{
    const id = req.ID;
    const seller = await sellerModel.findOne({_id:id });
    if (!seller) {
      return res.status(404).json({ message: 'Only sellers can be authorized' });
    }
    console.log("this is in check seller",seller);
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { Authenticate , checkSeller};
