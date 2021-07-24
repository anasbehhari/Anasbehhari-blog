import connectDb from "../../../utils/Dbconn";
import Blog from "../../../models/Blog";
connectDb();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      const Blogs = await Blog.find({});
      try {
        if (Blogs.length != 0) {
          res.json(Blogs);
        } else {
          res.json({ success: true, message: "Empty collection !" });
        }
      } catch (error) {
        res.json(error);
      }
      break;
    case "POST":
      try {
        const newBlog = await Blog.create(req.body);
        res
          .status(200)
          .json({
            success: true,
            message: "Document well inserted !",
            data: newBlog,
          });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
  }
};
