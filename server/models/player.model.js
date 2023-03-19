const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the schema used for the Player collection
const PlaySchema = new Schema({
  name: String,
  age: Number,
  position: String,
  image: String,
  clubs: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: "club",
    },
  ],
  history: [
    {
      championship: {
        type: mongoose.Schema.Types.Mixed,
        ref: "championship",
      },
      matchesPlayed: Number,
      goals: Number,
      assists: Number,
    },
  ],
});

module.exports = mongoose.model("player", PlaySchema);
