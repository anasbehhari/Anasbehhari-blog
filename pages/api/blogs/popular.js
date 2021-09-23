import connectDb from "../../../utils/Dbconn";
import Blog from "../../../models/Blog";
connectDb();
export default async function blogP(req, res) {
    const { method } = req;
    if (method == "GET") {
        const Blogs = await Blog.find().sort({views:-1}).limit(3);
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
        res.status(500).json({success:false})
    }
};
