const express = require("express");
const router = express.Router();

const club_controller = require("../controllers/club.controller.js");

router.get("/", club_controller.home); //url to get all the clubs

router.get("/:id", club_controller.searchById);

router.put("/:id", club_controller.update); //url to update a club object

router.delete("/:id", club_controller.delete); //url to delete a club object

router.post("/create", club_controller.create); //url to create a club object

module.exports = router;
