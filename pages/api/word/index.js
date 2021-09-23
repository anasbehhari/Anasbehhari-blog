import connectDb from "../../../utils/Dbconn";
import Word from "../../../models/Word";
import axios from "axios";
import { GETIP } from "../../../utils/StaticFunction";
connectDb();
const password = process.env.password;
export default async function wrd(req, res) {
    const { method, query } = req;
    switch (method) {
      case "GET":
        if (query.password == password) {
          const Words = await Word.find({});
          try {
            if (Words.length != 0) {
              res.json(Words);
            } else {
              res.json({ success: true, message: "Empty collection !" });
            }
          } catch (error) {
            res.json(error);
          }
        } else {
          res.json({
            message: "permission not allowed !!",
            state: "failure",
            success: false,
          });
        }

        break;
      case "POST":
        axios
          .get(
            "http://api.ipstack.com/" +
              GETIP(req) +
              "?access_key=" +
              process.env.access_key
          )
          .then((response) => {
            const newWord = Word.create({
              Word: req.body.Word,
              FullLocation:
                response.data.region_name +
                "-" +
                response.data.city +
                "," +
                response.data.country_name,
            });

            if (newWord) {
              res.status(200).json({ success: true });
            } else {
              res.status(404).json({ success: false, msg: "Empty Body !" });
            }
          })
          .catch((err) => {
            res.status(404).json({ success: false, err });
          });

        break;
    }
}
