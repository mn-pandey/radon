
const productModel = require("../models/productModel");

const createProduct= async function(req,res){
   let data = req.body;
   let book= await productModel.create(data)
   res.send(book)
}



module.exports.createProduct=createProduct
