const MoneyManage = require("../models/MoneyManage");
const asyncHandler = require("../middleware/async");

// get all moeny items
exports.allMoneyItems = asyncHandler(async (req, res, next) => {
  const items = await MoneyManage.find();
  res.status(200).json({ success: true, data: items, count: items.length });
});
// get items by category
exports.moneyItemByCat = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const query = await MoneyManage.find({ category: id });
  res.status(200).json({ success: true, data: query });
});
// add single item
exports.addMoneyItem = asyncHandler(async (req, res, next) => {
  const item = req.body;
  const add = await MoneyManage.create(item);
  res.status(201).json({ success: true, data: add });
});
// remove a item
exports.removeMoneyItem = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const remv = await MoneyManage.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: remv });
});
