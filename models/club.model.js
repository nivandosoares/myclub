const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the club model

const ClubSchema = new Schema({
  name: String,
  badge: String,
  coach: String,
  captain: String,
  competitions: [{ type: Schema.Types.ObjectId, ref: "championship" }],
  country: String,
  players: [{ type: Schema.Types.ObjectId, ref: "player" }],
});

module.exports = mongoose.model("club", ClubSchema);
