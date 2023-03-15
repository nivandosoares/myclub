const express = require("express");
const router = express.Router();

const club_controller = require("../controllers/club.controller.js");

router.get("/", club_controller.list); //url to get all the clubs

router.post("/create", club_controller.create); //url to create a club object

router.get("/:id", club_controller.searchById); //url to test the server

//router.get("/:id",club_controller.read);//url to read a club object

router.put("/:id", club_controller.update); //url to update a club object

router.delete("/:id", club_controller.delete); //url to delete a club object

module.exports = router;
