const express = require("express");
const router = express.Router();
const partyListController = require("../controllers/partyListController");

// تعريف المسارات
router.get("/parties", partyListController.getParties); // تأكد من أن getParties معرفة في partyListController
router.post("/party-lists", partyListController.createPartyList);

module.exports = router;
