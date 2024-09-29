const express = require("express");
const {
  allMoneyCounter,
  createMoneyCounter,
  removeCounter,
} = require("../controller/MoneyCounter");
const router = express.Router();

router.route("/").get(allMoneyCounter);
router.route("/:id").delete(removeCounter);
router.route("/").post(createMoneyCounter);
module.exports = router;
