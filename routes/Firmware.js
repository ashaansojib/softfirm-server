const express = require("express");
const { getFirmware, addFirmware, removeFirmware } = require("../controller/Firmware");
const router = express.Router();

router.route("/").get(getFirmware);
router.route("/").post(addFirmware);
router.route("/:id").delete(removeFirmware);

module.exports = router;