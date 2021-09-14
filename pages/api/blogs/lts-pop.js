import connectDb from "../../../utils/Dbconn";
import Blog from "../../../models/Blog";
connectDb();
export default async (req, res) => {
    const { method } = req;
    if (method == "GET") {
        const Blogs1 = await Blog.find().sort({ x: -1 }).limit(3);
        try {
            if (Blogs1.length != 0) {
                const Blogs2 = await Blog.find().sort({ views: -1 }).limit(3);
                try {
                    if (Blogs2.length != 0) {
                        let Blogs = {
                            latest: Blogs1,
                            popular: Blogs2,
                        }
                        res.json(Blogs)
                    } else {
                        res.json({ success: true, message: "Empty collection !" });
                    }
                } catch (error) {
                    res.json(error);
                }
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
