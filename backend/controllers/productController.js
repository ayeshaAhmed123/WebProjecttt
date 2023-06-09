const productModel=require("../models/productModel");



const create=async (req, res) => {
  console.log(req.product,req.body)
    let {name,description,price,stock_quantity,image,category}=req.body;
    let seller_id=req.ID;
    const product = new productModel({
      name: name,
      description: description,
      price: price,
      stock_quantity:stock_quantity,
      seller_id:seller_id,
      image: image,
      category:category
    });
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
const updateProduct=async (req, res) => {
    var id = req.params.id;
    // await userModel.updateOne()
    update = await productModel.updateOne({_id:id},
        { $set: req.body }
    ).then(async(update) => {
      const product= await productModel.findOne({_id:id}) 
        res.status(200).json(product)
    }).catch(err => {
        res.status(500).json({ "Message": "product Can not be updated", err: err })
    })
}
const delProduct= async (req, res) => {
  try {
    let id=req.params.id;
  const product = await productModel.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).send('Seller not found');
  }
  res.send(product);
} catch (err) {
  res.status(400).send(err.message);
}
  }
const getProductofSeller=async (req, res) => {
  try {
  let id = req.params.id;
  const products = await productModel.find({ seller_id: id });
  res.json(products);
} catch (err) {
  res.status(500).json({ message: err.message });
}
  }
  const getAllProduct=async (req, res) => {
    try {
    const products = await productModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
    }

  const findProductByName = async (req, res) => {
   try{
      const name = req.params.name;
      const product = await productModel.findOne({ name: { $regex: new RegExp(name, 'i') } , seller_id: req.ID})
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  

const findProductWithCategory=async (req, res) => {
 try {

   let category = req.params.category;
   const products = await productModel.find({ category: { $regex: new RegExp(category, 'i') } , seller_id: req.ID});
   res.json(products);
 } catch (err) {
   res.status(500).json({ message: err.message });
 }
}
const findProductWithCategoryHome=async (req, res) => {
  try {
    let category = req.params.category;
    const products = await productModel.find({ category: { $regex: new RegExp(category, 'i') } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 }
 
module.exports={create,updateProduct,delProduct,getProductofSeller,getAllProduct,findProductByName,findProductWithCategory,findProductWithCategoryHome}

