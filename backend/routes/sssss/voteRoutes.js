const express = require("express");
const router = express.Router();
const voteController = require("../controllers/voteController");

router.get("/lists", voteController.getLists);
router.get("/candidates/:listId", voteController.getCandidates);
router.post("/vote-list", voteController.voteForList);
router.post("/vote-candidates", voteController.voteForCandidates);
router.get("/check-vote-status/:nationalId", voteController.checkVoteStatus);
module.exports = router;
