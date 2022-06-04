const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const bookmodel=require("../models/bookmodel")
const UserController= require("../controllers/userController")
// const bookModel=express("../models/userModels")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/detailOfBook",UserController.detailOfBook)

router.get("/getDetailOfBook",UserController. getDetailOfBook)

module.exports = router;