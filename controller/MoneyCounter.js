const asyncHandler = require("../middleware/async");
const moneyCounter = require("../models/MoneyCounter");

exports.allMoneyCounter = asyncHandler(async (req, res, next) => {
  const category = req.params.cat;
  // console.log(category);
  const counters = await moneyCounter.find();
  res
    .status(200)
    .json({ success: true, count: counters.length, data: counters });
});
exports.createMoneyCounter = asyncHandler(async (req, res, next) => {
  const data = req.body;

  // Check if an entry with the same category exists in the database
  const existCounter = await moneyCounter.findOne({ cat: data.cat });

  if (existCounter) {
    // If the entry exists, add the new amount to the existing amount
    existCounter.amount += data.amount;

    // Save the updated record
    await existCounter.save();

    // Respond with the updated record
    return res.status(200).json({ success: true, data: existCounter });
  }

  // If the entry does not exist, create a new record with the provided data
  const newCounter = await moneyCounter.create(data);

  // Respond with the newly created record
  res.status(201).json({ success: true, data: newCounter });
});


exports.removeCounter = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const remove = await moneyCounter.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: remove });
});
