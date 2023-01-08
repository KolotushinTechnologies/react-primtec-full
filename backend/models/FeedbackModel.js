const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    message: String,
},
    {
        timestamps: true 
    }
);

const FeedbackModel = mongoose.model("Feedback", FeedbackSchema);

module.exports = FeedbackModel;
