const express = require("express");
const router = express.Router();

const campionship_controller = require("../controllers/campionship.controller.js");

router.get("/test",campionship_controller.test);//url to test the server!!!

router.get("/search/:club",campionship_controller.search);//url to search campionships in a particular club!!!

router.get("/sort/:pos",campionship_controller.sort);//url to sort campionships as per their ratings for a particular position!!!

router.post("/create",campionship_controller.create);//url to create a campionship object!!!

router.get("/:id",campionship_controller.read);//url to read a campionship object!!!

router.put("/:id/update",campionship_controller.update);//url to update a campionship object!!!

router.delete("/:id/delete",campionship_controller.delete);//url to delete a campionship object!!!

module.exports = router;