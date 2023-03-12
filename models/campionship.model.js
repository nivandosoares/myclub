const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChampionshipSchema = new Schema({
  name: String,
  description: Number,
  status: String,
  initialDate: Date,
  finalDate: Date,
  clubs: [String],
  matches: [String],
  atualChampion: String,
  goals: Number,
  assists: Number,
  yellowCards: Number,
  redCards: Number,
  striker: String,
  assistsLeader: String,
  city: String,
});

module.exports = mongoose.model("championship", ChampionshipSchema);
