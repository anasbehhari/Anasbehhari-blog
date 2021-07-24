import connectDb from "../../../../utils/Dbconn";
import Blog from "../../../../models/Blog";
connectDb();
export default async (req, res) => {
  const { query, method } = req;

  if (method == "GET" && query.title) {
    const currentBlog = await Blog.find({ title: query.title });
    try {
      if (currentBlog.length != 0) {
        res.status(200).json(currentBlog)
      }
      else {
        res.status(400).json({ message: "Blog not found !" })
      }
    } catch (error) {
      res.status(400).json({ message: "something went wrong", error })

    }
  }
  else {
    res.status(400).json({ message: "something went wrong" })
  }
}