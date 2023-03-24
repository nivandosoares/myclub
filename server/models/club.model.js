const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the club model

const ClubSchema = new Schema({
  name: String,
  city: String,
  image: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "player",
    },
  ],
  history: [
    {
      championship: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "championship",
        },
      ],
      position: String,
      points: Number,
      victories: Number,
      loss: Number,
      draws: Number,
      goalsPro: Number,
      goalsTaken: Number,
      bestParticipation: String,
    },
  ],
});

module.exports = mongoose.model("club", ClubSchema);
