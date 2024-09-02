const mongoose = require("mongoose");
const slugify = require("slugify");
const FirmwareSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add title"],
    unique: true,
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
  },
  size: {
    type: String,
  },
  desc: {
    type: String,
  },
  version: {
    type: String,
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
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  filename: {
    type: String,
  },
});
// make url
FirmwareSchema.pre("save", function (next) {
  this.filename = slugify(this.title, { lower: true });
  next();
});
module.exports = mongoose.model("Firmware-Schema", FirmwareSchema);
// title, brand, name, chipset, size, price, status, link, category, date, filename
