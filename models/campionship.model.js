const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChampionshipSchema = new Schema({
  name: String,
  badge: String,
  description: String,
  status: { enum: ["upcoming", "ongoing", "finished"] },
  initialDate: Date,
  finalDate: Date,
  clubs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "club",
      reqired: true,
    },
  ],
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: "match" }],
  atualChampion: { type: mongoose.Schema.Types.ObjectId, ref: "club" },
  goals: Number,
  assists: Number,
  yellowCards: Number,
  redCards: Number,
  striker: { type: mongoose.Schema.Types.ObjectId, ref: "player" },
  assistsLeader: { type: mongoose.Schema.Types.ObjectId, ref: "player" },
  city: String,
});

module.exports = mongoose.model("championship", ChampionshipSchema);
