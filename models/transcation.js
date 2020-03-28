const mongoose = require("mongoose");
const transcationSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Transcation", transcationSchema);
