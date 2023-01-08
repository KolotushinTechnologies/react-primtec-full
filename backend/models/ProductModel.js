const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name of a product"],
        trim: true,
        maxLength: [2000, "Product name not exceed than 20 characters"]
    },
    description: {
        type: String,
        required: [true, "Please add a description of your product"],
        maxlength: [4000, "Description is can not exceed than 4000 characters"]
    },
    price: {
        type: Number,
        required: [true, "Please add a price for your product"],
        maxLength: [8, "Price can not exceed than 8 characters"],
    },
    city: {
        type: String,
        required: [true, "Пожалуйста, укажите город, где находится товар"],
        maxLength: [50, "Название города не должно превышать 50 символов"],
    },
    offerPrice: {
        type: String,
        maxLength: [4, "Discount price can not exceed than 4 characters"],
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
    },
    videoUrl: {
        type: String
    },
    category: {
        type: String,
        required: [true, "Please add a category of your product"],
    },
    Stock: {
        type: Number,
        required: [true, "Please add some stoke for your product"],
        maxLength: [3, "Stock can not exceed than 3 characters"],
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
            },
            time: {
                type: Date,
                default: Date.now()
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        //   required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Product", productSchema);