const express = require("express");
const router = express.Router();

const club_controller = require("../controllers/club.controller.js");

router.get("/test", club_controller.test); //url to test the server

router.get("/search/:campionship", club_controller.search); //url to search clubs in a particular competition

router.post("/create", club_controller.create); //url to create a club object

router.get("/:id", club_controller.read); //url to read a club object

router.put("/:id/update", club_controller.update); //url to update a club object

router.delete("/:id/delete", club_controller.delete); //url to delete a club object

module.exports = router;
