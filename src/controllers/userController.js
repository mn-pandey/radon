const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  try{
  let data = req.body;
  if(Object.keys(data).length===0){
       res.status(400).send("BAD REQUEST , body can not be empty")
  }
  else{
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
  }}
  catch(error){
   res.status(500).send({msg:error.message})
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  if(!userName){
    res.status(400).send("bad request,emailId cannt be empty")
  }
  let password = req.body.password;
  if(!password){
    res.status(400).send("bad request , password can not be empty")
  }

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(404).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, token: token });
} catch(error){
  res.status(500).send("server error",{msg: error.message})
  return;
}
};

const getUserData = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  // If no token is present in the request header return error
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  // let decodedToken = jwt.verify(token, "functionup-radon");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });
  try{
  let userId = req.params.userId;
  if(!userId){
    res.status(400).send("bad request, user id in url is required")
  }
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}
catch(error){
  res.status(500).send({msg: error.message})
}
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  if (!userId){
    res.status(400).send("userId is required")
  }
  // let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  // if (!user) {
  //   return res.send("No such user exists");
  // }

  let userData = req.body;
  if(!userData){
    res.status(400).send("body can not be empty")
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
}
 catch(error){
  res.status(500).send("error:",error.message)
}}


const deleteUser =async function(req,res){
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  // if (!token) return res.send({ status: false, msg: "token must be present" });
  let userId = req.params.userId;
  // let user = await userModel.findById(userId);
  // if(!user){
  //   return res.send("no such user exits")
  // }
  let deletedData = await  userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
  res.send({ status : " deleted", deleteduser: deletedData})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser
