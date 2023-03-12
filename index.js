const express = require("express");
const app = express();
const PORT = 8000;
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const player = require("./routes/player.routes");
const club = require("./routes/club.routes");
const campionship = require("./routes/campionship.routes");

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
app.use("/campionships", campionship);

app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});

//listen on port 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
