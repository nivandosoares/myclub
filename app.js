const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const player = require("./server/routes/player.routes");
const club = require("./server/routes/club.routes");
const championship = require("./server/routes/championship.routes");
const match = require("./server/routes/match.routes");
dotenv.config();

//import mongoose
const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
//connect to mongodb database
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
  .once("open", function () {
    console.log("Connection has been made!");
  })
  .on("error", function (error) {
    console.log("Connection error:", error);
  });

//set EJS as templating engine

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/players", player);
app.use("/clubs", club);
app.use("/championships", championship);
app.use("/matches", match);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;
