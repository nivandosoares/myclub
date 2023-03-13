const Player = require("../models/player.model.js");

exports.test = function (req, res) {
  res.send("This route is running as expected");
}; //the basic testing querry

//export index with all the players
exports.index = async function (req, res) {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get player by specific club
exports.search = async function (req, res) {
  try {
    const players = await Player.find({ club: req.params.club });
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get player by specific position

exports.sort = async function (req, res) {
  try {
    const players = await Player.find({ position: req.params.pos }).sort({
      rating: -1,
    });
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to create a new Player object!!!
exports.create = async function (req, res) {
  const player = new Player({
    name: req.body.name,
    club: req.body.club,
    position: req.body.position,
    rating: req.body.rating,
  });

  player.save = async function (error) {
    if (error) {
      return error;
    }
    res.send("Player is created successfully!!!"); //the collection is the output
  };

  //the function to read a Player object in json
  exports.read = async function (req, res) {
    try {
      const player = await Player.findById(req.params.id);
      res.json(player);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

//the function to update a Player object!!!
exports.update = async function (req, res) {
  try {
    const player = await Player.findById(req.params.id);
    if (req.body.name != null) {
      player.name = req.body.name;
    }
    if (req.body.club != null) {
      player.club = req.body.club;
    }
    if (req.body.position != null) {
      player.position = req.body.position;
    }
    if (req.body.rating != null) {
      player.rating = req.body.rating;
    }
    const updatedPlayer = await player.save();
    res.json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to delete a Player object!!!
exports.delete = async function (req, res) {
  try {
    const player = await Player.findById(req.params.id);
    await player.remove();
    res.json({ message: "Deleted Player" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
