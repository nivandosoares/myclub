const express = require("express");
const router = express.Router();

const match_controller = require("../controllers/match.controller.js");

router.get("/", match_controller.index); //url to get all the matches

router.get("/test", match_controller.test); //url to test the server

router.post("/create", match_controller.create); //url to create a match object

router.get("/:id", match_controller.read); //url to read a match object

router.put("/:id/update", match_controller.update); //url to update a match object

router.delete("/:id/delete", match_controller.delete); //url to delete a match object

module.exports = router;
