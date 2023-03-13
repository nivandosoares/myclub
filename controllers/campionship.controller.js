const Campionship = require("../models/campionship.model.js");

exports.test = function (req, res) {
  res.send("This route is working fine as expected");
}; //the basic testing route to test the server

//the function to create a new Campionship object
exports.create = function (req, res) {
  let Campionship = new Campionship({
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
exports.read = function (req, res) {
  //var idd="5c306ea8617f7d12101711c9";
  Campionship.findById(req.params.id, function (error, product) {
    if (error) {
      return error;
    }

    res.send(product);
  });
};

//the function to update a Campionship object!!!
exports.update = function (req, res) {
  Campionship.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (error) {
      if (error) {
        return error;
      }
      res.send("Campionship is updated successfully!!!");
    }
  );
};

//the function to delete a Campionship object!!!
exports.delete = function (req, res) {
  Campionship.findByIdAndRemove(req.params.id, function (error) {
    // Campionship is removed with reference to id
    res.send("Campionship removed successfully!!!");
  });
};
