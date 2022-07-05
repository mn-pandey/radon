
const mongoose = require('mongoose');

const Objectid = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
     title: {
          type: String,
          required: "blog title is required",
          trim: true
     },
     body: {
          type: String,
          required: "blog body is required",
          trim: true
     },
     authorId: {
          type: Objectid,
          ref: 'author',
          required: "author id is required",

     },
     tags: [{
          type: String,
          trim: true
     }],
     category: {
          type: String,
          required: "category is required",
          trim: true
     },
     subcategory: [{
          type: String,
          trim:true 
     }],
     publishedAt: {
          type: Date,
          default: null
     },
     isDeleted: {
          type: Boolean,
          default: false
     },
     isPublished: {
          type: Boolean,
          default: false
     },
     deletedAt: {
          type: Date,
          default: null
     }


}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema)