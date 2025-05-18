const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/ChatMessage');

const dummyReply = (msg) => {
  if (msg.toLowerCase().includes("halo")) return "Halo juga!";
  return "Aku belum terlalu pintar, tapi aku akan belajar terus!";
};

router.post('/', async (req, res) => {
  const { message } = req.body;
  const reply = dummyReply(message);
  await ChatMessage.create({ user: message, bot: reply });
  res.json({ reply });
});

module.exports = router;
