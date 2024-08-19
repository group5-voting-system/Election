const express = require("express");
const router = express.Router();
const partyListController = require("../controllers/partyListvoteController");

router.get("/", partyListController.getAllLists);
router.post("/", partyListController.vote);

module.exports = router;
