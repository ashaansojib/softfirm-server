const UserSchema = require("../models/User");

// get users
exports.getUser = async(req, res, next) =>{
    // const users = await UserSchema.find();
    res.status(200).json({success: true, data: "User coming soon!"})
}