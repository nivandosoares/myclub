const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  type: String, // "friendly" ou "oficial match"
  campeonato: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campionship",
  },
  team1: {
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
    goals: Number,
  },
  team2: {
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
    goals: Number,
  },
});

module.exports = mongoose.model("match", matchSchema);
