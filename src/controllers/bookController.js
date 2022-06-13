
const { response } = require("express");
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel");
const publisherModel = require("../models/publisherModel");


   
    const createBook = async function(req,res){
        let data= req.body;
        
        if(!data.author){
            res.send("please enter the author id")
        }
        let author= await authorModel.findById(data.author);
        if(!author ){
            res.send("entered authorid is not valid")
        }
        if(!data.publisher){
            res.send("please enter the publisher id");
        }
        let publisher=await publisherModel.findById(data.publisher)
        if(!publisher){
            res.send("entered publisher id is not valid")
        }
        let savedata= await bookModel.create(data);
        res.send(savedata);
    }
       


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

const getbooks= async function(req,res){
    let allbooks=await bookModel.find().populate("author").populate("publisher");
    res.send({allbooks})
}
const updatebookcover= async function(req,res){
     let data=await publisherModel.find({name:{$in:["Penguin","Harper Collins"]}}).select({_id:1});
    let publisherId=data.map((x)=>x._id);
    let book = await bookModel.find({publisher:{$in:publisherId}}).updateMany({$set:{isHardCover:true}});
    let allbooks=await bookModel.find({isHardCover:true}).populate("author").populate("publisher");
    
    console.log(book)
    res.send(allbooks)
    
   
}
const updateprice=async function(req,res){
    
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getbooks=getbooks
module.exports.updatebookcover=updatebookcover
module.exports.updateprice=updateprice

