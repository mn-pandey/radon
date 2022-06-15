
const jwt = require("jsonwebtoken");
const userModel= require("../models/userModel")

const mid = async function(req,res,next){
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  // If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if(!user){
    return res.send("no such user exits")
  }

  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  // req.decodedToken=decodedToken

  let userLoggedIn= decodedToken.userId;
  console.log(userLoggedIn)
  let userToBeModified = req.params.userId;
  console.log(userToBeModified)
  if(userLoggedIn!=userToBeModified){
    res.send ("action unavailable")
    
  }
  else{
    next()
  }
  
}

module.exports.mid=mid