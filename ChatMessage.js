const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  user: String,
  bot: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
