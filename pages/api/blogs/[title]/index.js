import connectDb from "../../../../utils/Dbconn";
import Blog from "../../../../models/Blog";
connectDb();
export default async function tit(req, res) {
  const { query, method } = req;

  if (method == "GET" && query.title) {
    Blog.findOneAndUpdate({ title: query.title },
      {
          $inc:
          { views: 1 }
      }
      , function (err, blog) {
          if (err) { res.status(500).json({success:false,error:err}) }
          else {
              res.status(200).json(blog)
          }
      })
  }
  else {
    res.status(500).json({ message: "something went wrong" })
  }
}
