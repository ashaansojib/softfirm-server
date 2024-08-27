const express = require("express");
const { getUser } = require("../controller/Users");
const router = express.Router();

router.route("/").get(getUser);

module.exports = router;