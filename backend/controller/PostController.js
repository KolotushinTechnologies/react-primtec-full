const PostModel = require("../models/Post");
const ErrorHandler = require("../utils/ErrorHandler.js");
const Features = require("../utils/Features");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create new Post --Admin
exports.createPost = catchAsyncErrors(async (req, res) => {
    const userId = req.user.id;

    const { title, text, videoUrl } = req.body;
    const { file } = req;

    const newPost = await PostModel.create({
        title: title,
        text: text,
        videoUrl: videoUrl,
        photo: `${req.protocol}://${
            req.headers.host
            }/uploads/${file.path.split("\\").pop()}`,
        user: userId,
    });

    res.status(201).json({
        success: true,
        newPost,
    });
});

exports.getPosts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 8;

    const postsCount = await PostModel.countDocuments();

    const feature = new Features(PostModel.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

    const posts = await feature.query;

    res.status(200).json({
        success: true,
        posts,
        postsCount,
        resultPerPage,
    });
});

exports.getPostById = catchAsyncErrors(async (req, res, next) => {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
        return next(new ErrorHandler("Пост по данному ID не был найден!", 404));
    }

    res.status(200).json({
        success: true,
        post,
    });
});

exports.updatePostById = catchAsyncErrors(async (req, res, next) => {
    let product = await PostModel.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Пост по данному ID не был найден!", 404));
    }

    let images = [];

    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    if (images !== undefined) {
        // Delete image from cloudinary
        for (let i = 0; i < product.images.length; i++) {
            await cloudinary.v2.uploader.destroy(product.images[i].public_id);
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "products",
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        req.body.images = imagesLinks;
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });

    res.status(200).json({
        success: true,
        product,
    });
});
