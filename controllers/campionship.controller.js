const Campionship = require("../models/campionship.model.js");

exports.test = function (req, res) {
  res.send("This route is working fine as expected");
}; //the basic testing route to test the server

//list all the Campionships
exports.index = async (req, res) => {
  const Campionships = await Campionship.find();
  res.json(Campionships);
};

//the function to create a new Campionship object
exports.create = async (req, res) => {
  const Campionship = new Campionship({
    name: req.body.name,
    badge: req.body.badge,
    description: req.body.description,
    status: req.body.status,
    initialDate: req.body.initialDate,
    finalDate: req.body.finalDate,
    clubs: req.body.clubs,
    matches: req.body.matches,
    atualChampion: req.body.atualChampion,
    goals: req.body.goals,
    assists: req.body.assists,
    yellowCards: req.body.yellowCards,
    redCards: req.body.redCards,
    striker: req.body.striker,
    assistsLeader: req.body.assistsLeader,
    city: req.body.city,
  });

  Campionship.save(function (error) {
    if (error) {
      return error;
    }
    res.send("Campionship created successfully!!!");
  });
};

//calculating the best player by assists and goals

exports.getStriker = async (req, res) => {
  const results = await results.find();
  const players = {};

  results.forEach((result) => {
    const { homeTeam, awayTeam, score } = result;
    const [homeGoals, awayGoals] = score.split("-").map(Number);

    homeTeam.players.forEach((player) => {
      if (!players[player]) {
        players[player] = { goals: 0, assists: 0 };
      }

      players[player].goals += homeGoals;
      players[player].assists += 1;
    });

    awayTeam.players.forEach((player) => {
      if (!players[player]) {
        players[player] = { goals: 0, assists: 0 };
      }

      players[player].goals += awayGoals;
      players[player].assists += 1;
    });
  });

  const bestPlayer = Object.keys(players).reduce((a, b) => {
    return players[a].goals + players[a].assists >
      players[b].goals + players[b].assists
      ? a
      : b;
  });

  res.json({ bestPlayer });
};

//the function to read a Campionship object in json
exports.read = async function (req, res) {
  try {
    const Campionship = await Campionship.findById(req.params.id);
    res.json(Campionship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//the function to update a Campionship object
exports.update = async function (req, res) {
  try {
    const Campionship = await Campionship.findById(req.params.id);
    if (req.body.name != null) {
      Campionship.name = req.body.name;
    }
    if (req.body.badge != null) {
      Campionship.badge = req.body.badge;
    }
    if (req.body.description != null) {
      Campionship.description = req.body.description;
    }
    if (req.body.status != null) {
      Campionship.status = req.body.status;
    }
    if (req.body.initialDate != null) {
      Campionship.initialDate = req.body.initialDate;
    }
    if (req.body.finalDate != null) {
      Campionship.finalDate = req.body.finalDate;
    }
    if (req.body.clubs != null) {
      Campionship.clubs = req.body.clubs;
    }
    if (req.body.matches != null) {
      Campionship.matches = req.body.matches;
    }
    if (req.body.atualChampion != null) {
      Campionship.atualChampion = req.body.atualChampion;
    }
    if (req.body.goals != null) {
      Campionship.goals = req.body.goals;
    }
    if (req.body.assists != null) {
      Campionship.assists = req.body.assists;
    }
    if (req.body.yellowCards != null) {
      Campionship.yellowCards = req.body.yellowCards;
    }
    if (req.body.redCards != null) {
      Campionship.redCards = req.body.redCards;
    }
    if (req.body.striker != null) {
      Campionship.striker = req.body.striker;
    }
    if (req.body.assistsLeader != null) {
      Campionship.assistsLeader = req.body.assistsLeader;
    }
    if (req.body.city != null) {
      Campionship.city = req.body.city;
    }
    const updatedCampionship = await Campionship.save();
    res.json(updatedCampionship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//the function to delete a Campionship object
exports.delete = async function (req, res) {
  try {
    const Campionship = await Campionship.findById(req.params.id);
    await Campionship.remove();
    res.json({ message: "Campionship deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
