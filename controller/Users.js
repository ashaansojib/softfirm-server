const asyncHandeler = require("../middleware/async");
const UserSchema = require("../models/User");

// get users
exports.getUser = asyncHandeler(async (req, res, next) => {
  const users = await UserSchema.find();
  res.status(200).json({ success: true, data: users });
});
// get single user
exports.singleUser = asyncHandeler(async (req, res, next) => {
  const id = req.params.id;
  const user = await UserSchema.findOne({ _id: id });
  res.status(200).json({ success: true, data: user });
});
// create user
exports.makeUser = asyncHandeler(async (req, res, next) => {
  const data = req.body;
  const add = await UserSchema.create(data);
  res.status(201).json({ success: true, data: add });
});
// make admin
exports.makeAdmin = asyncHandeler(async (req, res, next) => {
  const id = req.params.id;
  const result = await UserSchema.findByIdAndUpdate(
    id,
    { status: "Admin" },
    { new: true }
  );
  console.log(result);
  res.status(200).json({ success: true, data: result });
});

// remove user
exports.removeUser = asyncHandeler(async (req, res, next) => {
  const id = req.params.id;
  const remove = await UserSchema.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: remove });
});
