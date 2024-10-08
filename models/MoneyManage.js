const mongoose = require("mongoose");

const moneyManageSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  info: {
    type: String,
  },
  cat: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("moneyManage", moneyManageSchema);
