const express = require("express");
const { uploadPost, allPosts } = require("../controllers/postController");
const router = express.Router();

//ROUTES FOR POSTING AND GETTING MESSAGES

router.route("/").post(uploadPost).get(allPosts);

module.exports = router;
