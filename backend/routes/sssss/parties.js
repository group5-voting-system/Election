const express = require("express");
const router = express.Router();
const partyController = require("../controllers/partyController");

router.get("/", partyController.getAllParties);

module.exports = router;
