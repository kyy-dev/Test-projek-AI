const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const chatRoutes = require('./routes/chat');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/chat', chatRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Terhubung ke MongoDB");
  app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
}).catch(err => console.error(err));
