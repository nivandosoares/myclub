const express = require("express");
const router = express.Router();

const player_controller = require("../controllers/player.controller.js");

router.get("/", player_controller.home); //url to get all the players

router.get("/:id", player_controller.searchById); //url to test the server

router.post("/create", player_controller.create); //url to create a player object

router.put("/:id", player_controller.update); //url to update a player object

router.delete("/:id", player_controller.delete); //url to delete a player object

module.exports = router;
