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
    default:"0"
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
  },
  image : {
    type: String,
    required: true, 
  }
  ,
  creationDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.models.Blog || mongoose.model("Blog",BlogSchema)
