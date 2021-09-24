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
        const subscriber = await Subscriber.find({ email: req.body.email });
        try {
          if (subscriber.length == 0) {
            try {
              const newSubscriber = await Subscriber.create(req.body);
              res.status(200).json({
                success: true,
              });
            } catch (error) {
              res.status(400).json({ error, success: false });
            }
          } else {
            res
              .status(200)
              .json({ message: "you already signed up !", success: false });
          }
        } catch (error) {
          res.status(400).json({ error, success: false });
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
