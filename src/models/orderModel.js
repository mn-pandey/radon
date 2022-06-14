const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    
	user:{
        type:objectId,
        ref:"uderDocument"
    },
	product:{
        type:objectId,
        ref:"product"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String

}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema) 
