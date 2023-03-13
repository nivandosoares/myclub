const express = require("express");
const router = express.Router();

const campionship_controller = require("../controllers/campionship.controller.js");

router.get("/best-player", campionship_controller.getStriker);

router.get("/test", campionship_controller.test); //url to test the server!!!

router.post("/create", campionship_controller.create); //url to create a campionship object

router.get("/:id", campionship_controller.read); //url to read a campionship object

router.put("/:id/update", campionship_controller.update); //url to update a campionship object

router.delete("/:id/delete", campionship_controller.delete); //url to delete a campionship object

module.exports = router;
