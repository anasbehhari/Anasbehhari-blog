import connectDb from "../../../../utils/Dbconn";
import Tag from "../../../../models/Tag";
connectDb();
export default async (req, res) => {
  const { method } = req;
  res.json({succes:true})
//   if (method == "GET") {
//     const data = await Tag.find({name});
//     try {
//         if(data!=null) {
//          res.status(200).json({success:true,data})
//         }
//         else {
//         res.status(400).json({ success: false, message: `Tag with name "${name}" not found ` });
//         }
//     } catch (error) {
//         res.status(400).json({ success: false, message: "Something went wrong !!!" });
//     }
//   } else {
//     res.status(400).json({ success: false, message: "Route Not found !!!" });
//   }
};
