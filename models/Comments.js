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
  _id: {
    type: String,
  },
});

module.exports = mongoose.model("PostComment", PostCommentSchema);
