const express = require("express");
const {
  getUser,
  makeUser,
  removeUser,
  singleUser,
  makeAdmin,
} = require("../controller/Users");
const router = express.Router();

router.route("/").get(getUser);
router.route("/:id").get(singleUser);
router.route("/:id").put(makeAdmin);
router.route("/").post(makeUser);
router.route("/:id").delete(removeUser);

module.exports = router;
