const express = require("express");
const router = express.Router();

const championship_controller = require("../controllers/championship.controller.js");

router.get("/", championship_controller.list); //url to get all the championships

router.get("/:id", championship_controller.searchById); //url to test the server

router.post("/create", championship_controller.create); //url to create a championship object

router.get("/:id/striker", championship_controller.strikers); //url to get the strikers of a championship")

router.put("/:id", championship_controller.update); //url to update a championship object

router.delete("/:id/delete", championship_controller.delete); //url to delete a championship object

module.exports = router;
