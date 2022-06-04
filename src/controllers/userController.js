const userModel = require("../models/userModel")
const bookmodel= require("../models/bookmodel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const detailOfBook= async function(req,res){
    let bookData=req.body
    let books=await bookmodel.create(bookData)
    res.send({msg:books })
}

const getDetailOfBook=async function(req,res){
    let allBooks=await bookmodel.find()
    res.send({msg: allBooks})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.detailOfBook=detailOfBook
module.exports.getDetailOfBook=getDetailOfBook