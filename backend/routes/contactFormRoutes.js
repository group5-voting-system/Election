const express = require("express");
const router = express.Router();
const Chat_Controller = require("../models/ContactForm");
const { getAllAdvertisements } = require("../models/ElectionAdvertis");

router.post("/chatuser", Chat_Controller.UserAddMessage);

router.get("/getall", Chat_Controller.getMessages);
// تم الإبقاء على /getall كما هو في الـ frontend
router.get("/advertisements", async (req, res) => {
  try {
    const ads = await getAllAdvertisements();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch advertisements" });
  }
});

module.exports = router;
