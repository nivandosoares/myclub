const Match = require("../models/match.model.js");

//Render the home page
exports.home = (req, res) => {
  try {
    res.render("index", { title: "App sem nome - home" });
  } catch (error) {
    res.status(500).send({ message: error.message || "error ocurred" });
  }
};

exports.list = async (req, res) => {
  try {
    const matches = await Match.find({});
    res.json(matches);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.searchById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    res.json(match);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create = async (req, res) => {
  try {
    const newMatch = new Match(req.body);
    const match = await newMatch.save();
    res.json(match);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(match);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const match = await Match.findByIdAndRemove(req.params.id);
    res.json(match);
  } catch (err) {
    res.status(500).send(err);
  }
};
