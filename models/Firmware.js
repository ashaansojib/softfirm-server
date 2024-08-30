const mongoose = require("mongoose");
const FirmwareSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add title"],
  },
  brand: {
    type: String,
    required: [true, "Please add brand name"],
  },
  model: {
    type: String,
    required: [true, "Please add model"],
  },
  chipset: {
    type: String,
    required: [true, "Please add chipset"],
  },
  size: {
    type: String,
    required: [true, "Please add file size"],
  },
  status: {
    type: String,
  },
  price: {
    type: String,
  },
  link: {
    type: String,
  },
  category: {
    type: String,
  },
  createAt: {
    type: Date,
  },
  filename: {
    type: String,
  },
});
module.exports = mongoose.model("Firmware-Schema", FirmwareSchema);
// title, brand, name, chipset, size, price, status, link, category, date, filename
