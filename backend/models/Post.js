const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Пожалуйста, введите заголовок статьи!"],
        trim: true,
        maxLength: [50, "Заголовок статьи не должен превышать 50-ти сиволов!"]
    },
    text: {
        type: String,
        required: [true, "Пожалуйста, введите текст статьи!"],
        maxlength: [10000, "Текст статьи не должен превышать 10-ти тысяч сиволов!"]
    },
    videoUrl: {
        type: String,
    },
    photo: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
    {
        timestamps: true
    }
);

module.exports = PostModel = mongoose.model("Post", PostSchema);
