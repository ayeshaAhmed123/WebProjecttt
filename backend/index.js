const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const session = require("express-session");
const passport = require("passport");
const connectToDB=require('./server.js')
const cors = require('cors');
//const upload = require("express-fileupload")
const sellerRouter=require('./routes/sellerRoutes.js')
const productRouter=require('./routes/productRoutes.js')
const orderRouter=require('./routes/orderRoutes.js')
const app = express()
const port = process.env.PORT || 5000
connectToDB();
app.use(bodyParser.json());
app.use(cors());

//app.use(upload())
app.use('/seller',sellerRouter);
app.use('/product',productRouter);
app.use('/order',orderRouter);
app.get("/",(req,res)=>{
    res.send("hellooooooooooooooooo")
})

app.listen(port, ()=>{ console.log(`App listening on port : http://localhost:${port}`)

})
//http://localhost:1500/