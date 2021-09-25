import connectDb from "../../../utils/Dbconn";
import Subscriber from "../../../models/Subscriber";
connectDb();
const password = process.env.password;
export default async function sub(req, res) {
  const { method, query } = req;
  if (query.password == password) {
    switch (method) {
      case "GET":
        const subscribers = await Subscriber.find({});
        try {
          if (subscribers.length != 0) {
            res.json(subscribers);
          } else {
            res.json({ success: true, message: "Empty collection !" });
          }
        } catch (error) {
          res.json(error);
        }

        break;
      case "POST":
        let body = JSON.parse(req.body);
        const subscriber = await Subscriber.find({ email: body.email });
        try {
          if (subscriber.length == 0) {
            try {
              const newSubscriber = await Subscriber.create(body);
              res.status(200).json({
                success: true
              });
            } catch (error) {
              res.status(400).json({ error:req.body, success: false });
            }
          } else {
            res
              .status(200)
              .json({ message: "you already signed up !", success: false });
          }
        } catch (error) {
          res.status(400).json({ error:"dd", success: false });
        }

        break;
    }
  } else {
    res.json({
      message: "permission not allowed !!",
      state: "failure",
      success: false,
    });
  }
}
