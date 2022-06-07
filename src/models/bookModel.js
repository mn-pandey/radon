const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: { 
         type : String,
         required : true
    }, 
    authorName: String, 
    tags: [String],
    year : {
        type : Number,
        default : 2021
    },
    totalPages : Number,
    stock : Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 


