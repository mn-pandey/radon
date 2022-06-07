const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName : 1,authorName :1, _id :0})
    res.send({msg: allBooks})
}

const getBookInYear= async function (req, res) {
    let value=req.query.year
    let allBooks= await BookModel.find({ year:value})
    res.send({msg: allBooks})
}

const getParticularBooks= async function (req, res) {
if(req.query.bookName){
    let book=req.query.bookName
    let allBooks= await BookModel.find({ bookName:book})
    res.send({msg: allBooks})
}
if(req.query.year){
    let book=req.query.year
    let allBooks= await BookModel.find({ year:book})
    res.send({msg: allBooks})
}
if(req.query.authorName){
    let book=req.query.authorName
    let allBooks= await BookModel.find({ authorName:book})
    res.send({msg: allBooks})
}
if(req.query.totalPages){
    let book=req.query.totalPages
    let allBooks= await BookModel.find({ totalPages:book})
    res.send({msg: allBooks})
}
 }



const getXINRBooks= async function (req, res) {
let books= await  BookModel.find({$or:[{"prices.indianPrice":"200INR"},{"prices.indianPrice":"100INR"},{"prices.indianPrice":"500INR"}]})

res.send({msg: books})
}

const getRandomBook= async function (req, res) {
let bookwithname= await BookModel.find({$or:[{stock:true},{totalPages:{$gt:500}}]})
res.send({msg: bookwithname})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBookInYear= getBookInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBook=getRandomBook