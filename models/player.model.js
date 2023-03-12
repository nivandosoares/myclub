const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the schema used for the Player collection!!!
const PlaySchema = new Schema({
  name: String,
  age: Number,
  club: String,
  position: String,
  rating: Number,
  goals: Number,
  assists: Number,
  yellowCards: Number,
  redCards: Number,
  historyClubs: [String],
  historyChampionships: [String],
  historyMatches: [String],
  lastMatch: String,
  nextMatch: String,
  lastGoal: String,
});

module.exports = mongoose.model("player", PlaySchema);
