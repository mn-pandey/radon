const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const listOut=async function(req, res){
    let author=await authorModel.find({author_name:"Chetan Bhagat"})
    let id = author[0].author_id;
    let data=await bookModel.find({author_id:id})
    res.send(data)
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const findAndUpdate= async function(req,res){
   let author =await bookModel.findOneAndUpdate(
       {name:"Two States"},
       { $set:{price:100}},
       {new:true})
    let price=author.price
   let id= author.author_id;
   let data = await authorModel.find({author_id:id})
   let name=data[0].author_name
   res.send({ "price" : price,
              "name":name})  
   
}

const bookByCost =async function(req,res){
   const  book=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0});
   let len=book.map(ele=>ele.author_id)
   let data=[]
   for(let i=0;i<len.length;i++){
       let x=len[i]
       const author=await authorModel.find({author_id:x}).select({author_name:1,author_id:1,_id:0})
       data.push(author)
   }
   const name=data.flat()

res.send({"msg":name})
}



module.exports.createAuthor= createAuthor

module.exports.createBook= createBook
module.exports.listOut=listOut
module.exports.findAndUpdate=findAndUpdate
module.exports.bookByCost=bookByCost
