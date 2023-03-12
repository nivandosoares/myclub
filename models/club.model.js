const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the club model

const ClubSchema = new Schema({
  name: String,
  badge: String,
  coach: String,
  captain: String,
  competitions: String,
  country: String,
  players: String,
});

module.exports = mongoose.model("club", ClubSchema);
