const express = require("express");
const router = express.Router();

const championhsip_controller = require("../controllers/championship.controller.js");

router.get("/", championhsip_controller.list); //url to get all the championhsips

router.get("/:id", championhsip_controller.searchById); //url to test the server

router.post("/create", championhsip_controller.create); //url to create a championhsip object

//router.get("/:id",championhsip_controller.read);//url to read a championhsip object

router.put("/:id/update", championhsip_controller.update); //url to update a championhsip object

router.delete("/:id/delete", championhsip_controller.delete); //url to delete a championhsip object

module.exports = router;
