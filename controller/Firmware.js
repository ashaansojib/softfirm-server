const FirmwareSchema = require("../models/Firmware");
const asyncHandler = require("../middleware/async");

// get all firmware
exports.getFirmware = asyncHandler(async (req, res, next) => {
  const brand = req.query.brand;

  // pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10; // set a default limit
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let query = brand 
    ? FirmwareSchema.find({ brand }) 
    : FirmwareSchema.find();

  // Apply sorting by createdAt in descending order
  query = query.sort({ createdAt: -1 });

  // Apply pagination
  query = query.skip(startIndex).limit(limit);

  // Execute query
  const firmware = await query;

  // Get the total count based on the brand filter if applicable
  const total = brand 
    ? await FirmwareSchema.countDocuments({ brand }) 
    : await FirmwareSchema.countDocuments();

  // Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({ 
    success: true, 
    count: firmware.length, 
    pagination, 
    data: firmware 
  });
});

exports.singleFirmware = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const firmware = await FirmwareSchema.findOne({ filename: id });
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
  const query = await FirmwareSchema.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: query });
});
