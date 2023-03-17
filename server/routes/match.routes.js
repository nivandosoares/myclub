const express = require("express");
const router = express.Router();

const match_controller = require("../controllers/match.controller.js");

//TODO implement new route to match.list
router.get("/", match_controller.home); //url to get all the matchs

router.get("/:id", match_controller.searchById); //url to test the server

router.post("/create", match_controller.create); //url to create a match object

//router.get("/:id",match_controller.read);//url to read a match object

router.put("/:id/update", match_controller.update); //url to update a match object

router.delete("/:id/delete", match_controller.delete); //url to delete a match object

module.exports = router;
