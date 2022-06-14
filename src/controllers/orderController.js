
const orderModel = require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let data = req.body
    console.log(data)
    if(!data.user){
        res.send("please enter user id")
    }
    let user= await userModel.findById(data.user)
    if(!user){
        res.send("please enter valid user id")
    }
    if(!data.product){
        res.send("please enter product id")
        return
    }
     let product= await productModel.findById(data.product)
     if(!product){
         res.send("please enter valid product id")
         return
 }
    

    //   let headerdata= req.headers.isfreeappuser
    //   if (headerdata=="true"){
    //  let ifTrue= await orderModel.find({amount:data.amount}).update({$set:{amount:0}},{$set:{isfreeappuser:"true"}})     
    //     console.log(ifTrue)
    //   } 
    //   let productprice =await productModel.findById(data.product).select({price:1,_id:0})
    //    if(headerdata=="false"){
    //     let ifFalse = await orderModel.find({amount:data.amount}).update({$set:{amount:productprice.price}},{$set:{isfreeappuser:"false"}})
    //     console.log(ifFalse)
    //    }


        res.send(saveData)
}

// const createOrder1 = async function(req, res){

//     let data = req.body;

//     let userId = await UserModel.findById(req.body.userId);
//     let productId = await ProductModel.findById(req.body.productId);
//     let savedData
  
//     if(!data.userId){
//       res.send({msg: "User id is manditory."});
//     }
//     else if(!userId){
//       res.send({msg: "Invalid User ID."});
//     }
//     else if(!data.productId){
//       res.send({msg: "Product id is manditory."})
//     }
//     else if(!productId){
//       res.send({msg:  "Invalid Product ID."});
//     }
//     else{
//       savedData = await orderModel.create(data);
  
//       if(req.headers['isFreeAppUser']){
//         await orderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } }, { new: true })
//       }
//       else{
//         let productPrice = productId.price;
//         if(userId.balance >= productPrice){
//           await UserModel.updateOne({ _id: data.userId }, { $inc: { balance: -productPrice } }, { new: true });
//           await orderModel.updateOne({ _id: savedData._id }, { $set: { amount: productPrice } }, { new: true });
//           res.send({msg: savedData});
//         }
//         else{
//           res.send({ msg: "The user doesn't have enough balance." });
//         }
//       }
//     }
// }


module.exports.createOrder= createOrder
// module.exports.createOrder1=createOrder1
