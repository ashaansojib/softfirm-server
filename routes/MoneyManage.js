const express = require("express");
const router = express.Router();
const {
  allMoneyItems,
  moneyItemByCat,
  removeMoneyItem,
  addMoneyItem,
} = require("../controller/MoneyManage");

router.route("/").get(allMoneyItems);
router.route("/").post(addMoneyItem);
router.route("/:cat").get(moneyItemByCat);
router.route("/:id").delete(removeMoneyItem);

module.exports = router;