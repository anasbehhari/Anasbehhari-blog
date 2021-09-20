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
    type: Number,
    default:0
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
  brief : {
    type: String
  }
  ,
  creationDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.models.Blog || mongoose.model("Blog",BlogSchema)
