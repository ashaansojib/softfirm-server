const asyncHandler = require("../middleware/async");
const LinksSchema = require("../models/SharedLinks");

// get all links
exports.allSharedLinks = asyncHandler(async (req, res, next) => {
  const links = await LinksSchema.find();
  res.status(200).json({ success: true, data: links });
});
// search by category
exports.getLinksByCat = asyncHandler(async (req, res, next) => {
  const cat = req.params.cat;
  const result = await LinksSchema.find({ category: cat });
  res.status(200).json({ success: true, data: result });
});
// add links
exports.addLinks = asyncHandler(async (req, res, next) => {
  const item = req.body;
  console.log(item);
  const result = await LinksSchema.create(item);
  res.status(201).json({ success: true, data: result });
});
// remove links
exports.removeLinks = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const remove = await LinksSchema.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: remove });
});
