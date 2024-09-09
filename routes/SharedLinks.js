const express = require("express");
const {
  allSharedLinks,
  getLinksByCat,
  addLinks,
  removeLinks,
} = require("../controller/SharedLinks");
const router = express.Router();

router.route("/").get(allSharedLinks);
router.route("/cat").get(getLinksByCat);
router.route("/").post(addLinks);
router.route("/:id").delete(removeLinks);

module.exports = router;