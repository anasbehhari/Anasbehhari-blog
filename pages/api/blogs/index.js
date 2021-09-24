import connectDb from "../../../utils/Dbconn";
import Blog from "../../../models/Blog";
connectDb();
export default async function titG(req, res) {
  const { method, query } = req;
  switch (method) {
    case "GET":
      if (query.max && query.offset && !query.tag) {
        const Blogs = await Blog.find({})
          .skip(parseInt(query.offset))
          .limit(parseInt(query.max));
        try {
          if (Blogs.length != 0) {
            res.json(Blogs);
          } else {
            res.json({ blogs: 0, success: true });
          }
        } catch (error) {
          res.json(error);
        }
      } else if (query.max && query.offset && query.tag) {
        const Blogs = await Blog.find({ Tags: query.tag })
          .skip(parseInt(query.offset))
          .limit(parseInt(query.max));
        try {
          if (Blogs.length != 0) {
            res.json(Blogs);
          } else {
            res.json({ blogs: 0, success: true });
          }
        } catch (error) {
          res.json(error);
        }
      } else {
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
      }

      break;
    case "POST":
      if (query.password) {
        try {
          const newBlog = await Blog.create(req.body);
          res.status(200).json({
            success: true,
          
            data: newBlog,
          });
        } catch (error) {
          res.status(400).json(error);
        }
        break;
      } else {
        res.json({
          message: "permission not allowed !!",
          state: "failure",
          success: false,
        });
      }
  }
}
