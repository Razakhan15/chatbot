const mongoose = require("mongoose");

//MODEL FOR DB

const postModel = mongoose.Schema(
  {
    client: String,
    bot: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postModel);

module.exports = Post;
