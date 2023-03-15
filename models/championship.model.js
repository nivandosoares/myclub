const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChampionshipSchema = new Schema({
  name: String,
  ano: Number,
  clubs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "club",
    },
  ],
});

module.exports = mongoose.model("championship", ChampionshipSchema);
