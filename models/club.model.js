const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the club model

const ClubSchema = new Schema({
  name: String,
  badge: String,
  club: String,
  city: String,
  state: String,
  players: [String],
  championships: [String],
  matches: [String],
  lastMatch: String,
  nextMatch: String,
  competitionRanking: String,
});

module.exports = mongoose.model("club", ClubSchema);
