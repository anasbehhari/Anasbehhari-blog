import connectDb from "../../../../utils/Dbconn";
import Tag from "../../../../models/Tag";
import Blog from "../../../../models/Blog";

connectDb();
export default async function tgn(req, res) {
  const { query, method } = req;
   if (method == "GET"  && query.name && !query.blogs && !query.count) {
    const currentTag = await Tag.find({ name: query.name });
    try {
      if (currentTag.length != 0) {
        res.status(200).json(currentTag)
      }
      else {
        res.status(400).json({ message: "Tag not found !" })
      }
    } catch (error) {
      res.status(400).json({ message: "something went wrong", error })
    }
  }
  else if (method == "GET" && query.name && query.blogs && !query.count) {
    const currentTag = await Tag.findOne({ name: query.name });
    let max=1000;
    if(query.max) {
      max=parseInt(query.max);
    }
    
    try {
      if (currentTag.length != 0) {
        const Blogs = await Blog.find({ Tags: query.name }).limit(max)
        try {
          if (Blogs.length != 0) {
            res.status(200).json({ Tag: currentTag, Blogs })
          }
          else {
            res.status(200).json({ Tag: currentTag, Blogs: "0" })
          }
        } catch (error) {
          res.status(400).json({ message: "something went wrong", error })
        }
      }
      else {
        res.status(400).json({ message: "Tag not found !" })
      }
    } catch (error) {
      res.status(400).json({ message: "something went wrong", error })
    }
  }
  else if (method == "GET" && query.name && query.count) {
    const currentTag = await Tag.find({ name: query.name })
    try {
      if (currentTag.length != 0) {
        Blog.find({ Tags: query.name }).countDocuments(function (err, count) {
          if (err) res.status(404).json({ message: "something went wrong", error })
          res.status(200).json({ currentTag, count })
        });
      }
      else {
        res.status(400).json({ message: "Tag not found !" })
      }
    } catch (error) {
      res.status(400).json({ message: "something went wrong", error })
    }
  }
 
  else {
    res.status(400).json({ message: "something went wrong" })
  }
}