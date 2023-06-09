const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const path = require("path");

const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const user = require("./server/routes/user.routes");
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

app.use(express.static("public"));
app.use(expressLayouts);
app.use(cookieParser("CoookieSecure"));
app.use(
  session({
    secret: "CookieSecretSession",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(fileUpload());

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname + "/views"));
app.use("/public/", express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/players", player);
app.use("/clubs", club);
app.use("/championships", championship);
app.use("/matches", match);
app.use("/user", user);

const routes = require("./server/routes/match.routes");
app.use("/", routes);

module.exports = app;
