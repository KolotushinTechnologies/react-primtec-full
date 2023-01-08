const express = require("express");
const {
  createPost,
  getPosts,
  getPostById,
} = require("../controller/PostController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// Import Multer
const multer = require("../utils/multer");

router
  .route("/blog/new-post")
  .post(isAuthenticatedUser, authorizeRoles("admin"), multer.single("file"), createPost);

router.route("/blog/posts").get(getPosts);

router.route("/blog/post/:id").get(getPostById);

module.exports = router;
