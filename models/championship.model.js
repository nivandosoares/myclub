const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChampionshipSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  ano: Number,
  clubs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
  ],
});

module.exports = mongoose.model("championship", ChampionshipSchema);
