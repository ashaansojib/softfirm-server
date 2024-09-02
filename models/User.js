const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Add user name."],
  },
  email: {
    type: String,
    required: [true, "Add Your Email."],
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("users", UserSchema);
