const express = require("express");
const {
  commentsById,
  createComment,
  removeComment,
  allComments,
} = require("../controller/Comments");
const router = express.Router();

router.route("/").get(allComments);
router.route("/:id").get(commentsById);
router.route("/").post(createComment);
router.route("/:id").delete(removeComment);

module.exports = router;
