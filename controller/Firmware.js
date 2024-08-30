const FirmwareSchema = require("../models/Firmware");
const asyncHandler = require("../middleware/async");

// get all firmware
exports.getFirmware = asyncHandler(async (req, res, next) => {
  const firmware = await FirmwareSchema.find();
  res.status(200).json({ success: true, data: firmware });
});
// create a firmware
exports.addFirmware = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const add = await FirmwareSchema.create(data);
  res.status(201).json({ success: true, data: add });
});
// remove a firmware
exports.removeFirmware = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const query = await FirmwareSchema.deleteOne(id);
  res.status(200).json({ success: true, data: query });
});
