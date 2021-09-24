import connectDb from "../../../utils/Dbconn";
import Contact from "../../../models/Contact";
connectDb();
const password = process.env.password;
export default async function sub(req, res) {
  let { method, query, body } = req;
  if (query.password == password) {
    switch (method) {
      case "GET":
        res.status(404).json({ statusCode: 404, message: "Page Not Found" });
      case "POST":
        body = JSON.parse(body);
        const NewContact = new Contact({
          name: body.name,
          email: body.email,
          subject: body.subject,
          message: body.message,
        });
        NewContact.save()
          .then((doc) => {
            res.status(200).json({
              success: true,
            });
          })
          .catch((err) => {
            res.status(500).json({
              statusCode: 500,
              message: "Internal Server Error ,try again !",
              err,
            });
          });
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
