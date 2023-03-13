const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  homeTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "club",
    required: true,
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "club",
    required: true,
  },
  date: { type: Date, required: true },
  competition: { type: String, required: true },
  result: { type: String, enum: ["home", "away", "draw", "upcoming"] },
});

module.exports = mongoose.model("match", matchSchema);
