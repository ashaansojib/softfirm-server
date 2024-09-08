const asyncHandeler = require("../middleware/async");
const PostCommentSchema = require("../models/Comments");
// all comments get
exports.allComments = asyncHandeler(async (req, res, next) => {
  const result = await PostCommentSchema.find();
  res.status(200).json({ success: true, data: result });
});
// get comments by sing
exports.commentsById = asyncHandeler(async (req, res, next) => {
  const id = req.params.id;
  const comments = await PostCommentSchema.find({ postId: id });
  res.status(200).json({ success: true, data: comments });
});
// add a comments
exports.createComment = asyncHandeler(async (req, res, next) => {
  const comment = req.body;
  const add = await PostCommentSchema.create(comment);
  res.status(201).json({ success: true, data: add });
});
// remove a comments
exports.removeComment = asyncHandeler(async (req, res, next) => {
  const id = req.params.id;
  const remove = await PostCommentSchema.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: remove });
});
