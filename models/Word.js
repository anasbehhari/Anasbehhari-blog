const mongoose = require("mongoose");

var WordSchema = new mongoose.Schema({
    Word: {
        type: String,
        required: true
    },
    FullLocation : {
        type: String,
        required: true
    },
    SentDate: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.models.Word || mongoose.model("Word", WordSchema)
