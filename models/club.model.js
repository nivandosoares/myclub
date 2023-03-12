const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the club model

const ClubSchema = new Schema({
  name: String,
  badge: String,
  coach: String,
  captain: String,
  competitions: [ChampionshipSchema],
  country: String,
  players: [PlayerSchema],
});

module.exports = mongoose.model("club", ClubSchema);
