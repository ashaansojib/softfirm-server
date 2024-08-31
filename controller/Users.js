const asyncHandeler = require("../middleware/async");
const UserSchema = require("../models/User");

// get users
exports.getUser = asyncHandeler(async (req, res, next) => {
    const users = await UserSchema.find();
    res.status(200).json({ success: true, data: users })
});
// create user
exports.makeUser = asyncHandeler(async (req, res, next) => {
    const data = req.body;
    const add = await UserSchema.create(data);
    res.status(201).json({ success: true, data: add })
});
// remove user
exports.removeUser = asyncHandeler(async (req, res, next) => {
    const id = req.params.id;
    const remove = await UserSchema.deleteOne({id});
    res.status(200).json({ success: true, data: remove })
});