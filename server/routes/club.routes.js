const express = require("express");
const router = express.Router();

const club_controller = require("../controllers/club.controller.js");

router.get("/", club_controller.home); //url to get all the clubs

router.get("/create", club_controller.submitClub); //url to create a club object

router.get("/:id", club_controller.searchById); //render club page

router.post("/create", club_controller.submitClubOnPost); //url to create a club object

module.exports = router;
