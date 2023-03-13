const Club = require("../models/club.model.js");

exports.test = function (req, res) {
  res.send("Looks quite good!!!");
}; //the basic testing querry!!!

//list all the clubs
exports.index = async function (req, res) {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to create a new Club object
exports.create = async function (req, res) {
  const Club = new Club({
    name: req.body.name,
    badge: req.body.badge,
    coach: req.body.coach,
    captain: req.body.captain,
    competitions: req.body.competitions,
    country: req.body.country,
    players: req.body.players,
  });


  Club.save = async function (error) {
    if (error) {
      return error;
    }
    res.send("Club is created successfully!!!"); //the collection is the output
  };
};
//the function to read a Club object in json
exports.read = async function (req, res) {
  try {
    const club = await Club.findById(req.params.id);
    res.json(club);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to update a Club object
exports.update = async function (req, res) {
  try {
    const club = await Club.findById(req.params.id);
    if (req.body.name != null) {
      club.name = req.body.name;
    }
    if (req.body.badge != null) {
      club.badge = req.body.badge;
    }
    if (req.body.coach != null) {
      club.coach = req.body.coach;
    }
    if (req.body.captain != null) {
      club.captain = req.body.captain;
    }
    if (req.body.competitions != null) {
      club.competitions = req.body.competitions;
    }
    if (req.body.country != null) {
      club.country = req.body.country;
    }
    if (req.body.players != null) {
      club.players = req.body.players;
    }
    const updatedClub = await club.save();
    res.json(updatedClub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to delete a Club object
exports.delete = async function (req, res) {
  try {
    const club = await Club.findById(req.params.id);
    await club.remove();
    res.json({ message: "Club deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

