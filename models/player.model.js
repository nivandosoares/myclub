const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the schema used for the Player collection!!!
const PlaySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
  position: String,
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
  },
  history: [
    {
      campionship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Campionship",
      },
      matchesPlayed: Number,
      goals: Number,
      assists: Number,
    },
  ],
});

module.exports = mongoose.model("player", PlaySchema);
