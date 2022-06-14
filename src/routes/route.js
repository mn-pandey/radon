const express = require('express');
const router = express.Router();

const orderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")
const userController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares");





router.post("/createproduct", ProductController.createProduct  )

router.post("/createorder",commonMW.mid,orderController.createOrder)


router.post("/createUser",commonMW.mid, userController.createUser)
router.post("/createorder1",commonMW.mid, orderController.createOrder1)




module.exports = router;