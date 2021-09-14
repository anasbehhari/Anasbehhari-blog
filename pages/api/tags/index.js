import connectDb from "../../../utils/Dbconn";
import Tag from "../../../models/Tag";
import { parseBody } from "next/dist/next-server/server/api-utils";
connectDb();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      if(req.query.max) {
        const tags = await Tag.find({}).limit(parseInt(req.query.max));
        try {
          if (tags.length != 0) {
            res.json(tags);
          } else {
            res.json({ success: true, message: "Empty collection !" });
          }
        } catch (error) {
          res.json(error);
        }
      }
      else {
        const tags = await Tag.find({});
        try {
          if (tags.length != 0) {
            res.json(tags);
          } else {
            res.json({ success: true, message: "Empty collection !" });
          }
        } catch (error) {
          res.json(error);
        }
      }
     
      break;
    case "POST":
      try {
        const newTag = await Tag.create(req.body);
        res
          .status(200)
          .json({
            success: true,
            message: "Document well inserted !",
            data: newTag,
          });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
  }
};
