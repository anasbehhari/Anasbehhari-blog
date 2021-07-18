const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: String,
    required: true,
  },
  views: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    required: true,
  },
  dislikes: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true, 
  },
  Tags : {
      type:Array,
      required: true,
  }
  ,
  creationDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.models.Blog || mongoose.model("Blog",BlogSchema)
