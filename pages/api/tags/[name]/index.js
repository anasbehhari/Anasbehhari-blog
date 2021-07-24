import connectDb from "../../../../utils/Dbconn";
import Tag from "../../../../models/Tag";
connectDb();
export default async (req, res) => {
  const { query, method } = req;

  if (method == "GET" && query.name) {
    const currentTag = await Tag.find({ name: query.name });
    try {
      if (currentTag.length != 0) {
        res.status(200).json(currentTag)
      }
      else {
        res.status(400).json({ message: "Tag not found !" })
      }
    } catch (error) {
      res.status(400).json({ message: "something went wrong", error })

    }
  }
  else {
    res.status(400).json({ message: "something went wrong" })
  }
}