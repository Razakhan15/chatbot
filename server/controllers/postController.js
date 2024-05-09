const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const allPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500);
    throw new Error("Failed to get the posts");
  }
});

const uploadPost = asyncHandler(async (req, res) => {
  try {
    const { client, bot } = req.body;
    if (!client || !bot) {
      return res.status(400).json({ error: "Enter text" });
    }

    var newPost = {
      client,
      bot,
    };

    var post = await Post.create(newPost);
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500);
    throw new Error("Error creating post");
  }
});

module.exports = { allPosts, uploadPost };
