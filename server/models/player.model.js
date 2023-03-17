const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the schema used for the Player collection
const PlaySchema = new Schema({
  name: String,
  age: Number,
  position: String,
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "club",
  },
  history: [
    {
      championship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "championship",
      },
      matchesPlayed: Number, 
      goals: Number,
      assists: Number,
    },
  ],
});

module.exports = mongoose.model("player", PlaySchema);
