const express = require("express");
const router = express.Router();
const candidateRequestController = require("../controllers/candidateRequestController");

router.get("/", candidateRequestController.getAllRequests);
router.get("/:id", candidateRequestController.getRequestById);
router.post("/", candidateRequestController.createRequest);
router.patch("/:id", candidateRequestController.updateRequest);
router.delete("/:id", candidateRequestController.deleteRequest);

module.exports = router;
