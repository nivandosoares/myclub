const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the club model

const ClubSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  city: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "player",
    },
  ],
  history: [
    {
      campionship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Campionship",
      },
      position: String,
      points: Number,
      victories: Number,
      loss: Number,
      draws: Number,
      goalsPro: Number,
      goalsTaken: Number,
    },
  ],
});

module.exports = mongoose.model("club", ClubSchema);
