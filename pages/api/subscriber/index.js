import connectDb from "../../../utils/Dbconn";
import Subscriber from "../../../models/Subscriber";
connectDb();
const password = process.env.password;
export default async function sub(req, res) {
    const { method, query } = req;
    switch (method) {
        case "GET":
            if (query.password == password) {
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
            }
            else {
                res.json({ message: "permission not allowed !!", state: "failure", success: false })
            }

            break;
        case "POST":
            const subscriber = await Subscriber.find({ email: req.body.email });
            try {
                if (subscriber.length == 0) {
                    try {
                        const newSubscriber = await Subscriber.create(req.body);
                        res
                            .status(200)
                            .json({
                                success: true,
                                message: "Document well inserted !"
                            });
                    } catch (error) {
                        res.status(400).json({ error, success: false });
                    }
                }
                else {
                    res.status(200).json({ message:"you already signed up !", success: false })
                }
            }
            catch (error) {
                res.status(400).json({ error, success: false });
            }


            break;
    }
};
