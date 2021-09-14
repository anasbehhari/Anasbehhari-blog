import connectDb from "../../../utils/Dbconn";
import Blog from "../../../models/Blog";
connectDb();
export default async (req, res) => {
    const { method } = req;
    if (method == "GET") {
        const Blogs = await Blog.find().sort({x:-1}).limit(3);
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
    else {
        res.status(404).json("ERROR 404")
    }
};
