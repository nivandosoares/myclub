const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const championshipSchema = new mongoose.Schema({
  name: String,
  year: Number,
  structure: {
    type: String,
    enum: ["round-robin", "knockout", "league"],
    required: true,
  },
  numRounds: Number, // para torneios com rodadas definidas
  groups: [
    {
      name: String,
      teams: [
        {
          type: mongoose.Schema.Types.Mixed,
          ref: "club",
        },
      ],
      standings: [
        {
          team: {
            type: mongoose.Schema.Types.Mixed,
            ref: "club",
          },
          points: Number,
          wins: Number,
          draws: Number,
          losses: Number,
          goalsFor: Number,
          goalsAgainst: Number,
        },
      ],
    },
  ],
  fixtures: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: "match",
    },
  ],
});

module.exports = mongoose.model("championship", championshipSchema);
