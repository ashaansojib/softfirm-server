const express = require("express");
const {
  getFirmware,
  addFirmware,
  removeFirmware,
  singleFirmware,
} = require("../controller/Firmware");
const router = express.Router();

router.route("/").get(getFirmware);
router.route("/:id").get(singleFirmware);
router.route("/").post(addFirmware);
router.route("/:id").delete(removeFirmware);

module.exports = router;
