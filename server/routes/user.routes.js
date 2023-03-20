const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user_controller.js");

router.get("/login", user_controller.login); //url to render login page

router.post("/login", user_controller.postLogin); //url to send login data

router.get("/signup", user_controller.signup); //url to render register page

router.post("/register", user_controller.registerOnPost); //url to send register data

module.exports = router;
