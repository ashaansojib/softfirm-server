const express = require("express");
const { getUser, makeUser, removeUser } = require("../controller/Users");
const router = express.Router();

router.route("/").get(getUser);
router.route("/").post(makeUser);
router.route("/:id").delete(removeUser);

module.exports = router;