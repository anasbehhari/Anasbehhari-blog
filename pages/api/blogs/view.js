import connectDb from "../../../utils/Dbconn";
import Blog from "../../../models/Blog";
const objId = require('mongodb').ObjectID;

connectDb();
export default async (req, res) => {

    const { method, body} = req;
    const Id = body._id;

    if (method == "PUT" && Id && objId.isValid(Id)) {
        Blog.findByIdAndUpdate(Id,
            {
                $inc:
                    { views: 1 }
            }
            , function (err, blog) {
                if (err) { res.status(500).json({success:false,err}) }
                else {
                    res.status(200).json({success:true})
                }
            })
    }
    else {
        res.status(404).json({ status: "FAILURE", message: "ERROR 404" })
    }

}