const mongoose = require("mongoose");

const moenyCounterSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  cat: {
    type: String,
  },
  info: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("moneyCounter", moenyCounterSchema);
