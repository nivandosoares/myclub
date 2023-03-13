const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the schema used for the Player collection!!!
const PlaySchema = new Schema({
  name: String,
  age: Number,
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "club",
  },
  position: String,
  rating: Number,
  goals: Number,
  assists: Number,
  yellowCards: Number,
  redCards: Number,
  historyClubs: [{ type: mongoose.Schema.Types.ObjectId, ref: "club" }],
  historyChampionships: [
    { type: mongoose.Schema.Types.ObjectId, ref: "campionship" },
  ],
  historyMatches: [{ type: mongoose.Schema.Types.ObjectId, ref: "match" }],
  lastMatch: { type: mongoose.Schema.Types.ObjectId, ref: "match" },
  nextMatch: { type: mongoose.Schema.Types.ObjectId, ref: "match" },
  lastGoal: { type: mongoose.Schema.Types.ObjectId, ref: "match" },
});

module.exports = mongoose.model("player", PlaySchema);
