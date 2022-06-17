
const jwt = require("jsonwebtoken");
const userModel= require("../models/userModel")

const mid = async function(req,res,next){
  try{
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  // If no token is present in the request header return error
  if (!token) return res.status(401).send({ status: false, msg: "token must be present" });

  console.log(token);
  let userId = req.params.userId;
  if(!userId){
    res.status(400).send("used id must be present")
  }
  let user = await userModel.findById(userId);
  if(!user){
    return res.status(404).send("no such user exits")
  }

  
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" });

  // req.decodedToken=decodedToken

  let userLoggedIn= decodedToken.userId;
  console.log(userLoggedIn)
  let userToBeModified = req.params.userId;
  console.log(userToBeModified)
  if(userLoggedIn!=userToBeModified){
    res.status(403).send ("action unavailable")
    
  }
  else{
    next()
  }
  
}catch(error){
   res.status(500).send({msg:error.message})
}
}


module.exports.mid=mid