const mongoose = require("mongoose");

const PostCommentSchema = new mongoose.Schema({
  comment: {
    type: String
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  postId : {
    type: String,
  },
});

module.exports = mongoose.model("PostComment", PostCommentSchema);
