const express = require("express");
const {
  commentsById,
  createComment,
  removeComment,
} = require("../controller/Comments");
const router = express.Router();

router.route("/:id").get(commentsById);
router.route("/").post(createComment);
router.route("/:id").delete(removeComment);

module.exports = router;
