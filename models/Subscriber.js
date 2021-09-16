const mongoose = require("mongoose");

var SubscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    ,
    joinDate: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema)
