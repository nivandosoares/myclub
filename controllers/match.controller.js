const match = require("../models/match.model.js");

exports.test = function (req, res) {
  res.send("Looks quite good!!!");
}; //the basic testing querry!!!

//list all matches
exports.index = async function (req, res) {
  try {
    const matches = await match.find();
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.search = async function (req, res) {
  try {
    const matches = await match.find({ competition: req.params.competition });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to create a new match object!!!
exports.create = async function (req, res) {
  const match = new match({
    competition: req.body.competition,
    date: req.body.date,
    homeTeam: req.body.homeTeam,
    awayTeam: req.body.awayTeam,
    homeScore: req.body.homeScore,
    awayScore: req.body.awayScore,
  });
};

match.save = async function (error) {
  if (error) {
    return error;
  }
  res.send("match is created successfully!!!"); //the collection is the output
};

//the function to read a match object in json
exports.read = async function (req, res) {
  try {
    const match = await match.findById(req.params.id);
    res.json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to update a match object
exports.update = async function (req, res) {
  try {
    const match = await match.findById(req.params.id);
    if (req.body.competition != null) {
      match.competition = req.body.competition;
    }
    if (req.body.date != null) {
      match.date = req.body.date;
    }
    if (req.body.homeTeam != null) {
      match.homeTeam = req.body.homeTeam;
    }
    if (req.body.awayTeam != null) {
      match.awayTeam = req.body.awayTeam;
    }
    if (req.body.homeScore != null) {
      match.homeScore = req.body.homeScore;
    }
    if (req.body.awayScore != null) {
      match.awayScore = req.body.awayScore;
    }
    const updatedmatch = await match.save();
    res.json(updatedmatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to delete a match objec
exports.delete = async function (req, res) {
  try {
    const match = await match.findById(req.params.id);
    await match.remove();
    res.json({ message: "Deleted match" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
