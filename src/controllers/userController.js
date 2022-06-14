const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")






const createUser= async function (req, res) {
    
    let data= req.body
    let user=await userModel.create(data)
    res.send(user)
}


module.exports.createUser= createUser
