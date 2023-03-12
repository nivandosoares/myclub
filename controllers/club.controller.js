const Club = require("../models/Club.model.js");

exports.test = function (req, res) {
  res.send("Looks quite good!!!");
}; //the basic testing querry!!!

//the function to create a new Club object!!!
exports.create = function (req, res) {
  let Club = new Club({
    name: req.body.name,
    badge: req.body.badge,
    coach: req.body.coach,
    captain: req.body.captain,
    competitions: req.body.competitions,
    country: req.body.country,
    players: req.body.players,
  });

  Club.save(function (error) {
    if (error) {
      return error;
    }
    res.send("Club created successfully!!!");
  });
};

//the function to read a Club object in json
exports.read = function (req, res) {
  //var idd="5c306ea8617f7d12101711c9";
  Club.findById(req.params.id, function (error, product) {
    if (error) {
      return error;
    }

    res.send(product);
  });
};

//the function to update a Club object!!!
exports.update = function (req, res) {
  Club.findByIdAndUpdate(req.params.id, { $set: req.body }, function (error) {
    if (error) {
      return error;
    }
    res.send("Club is updated successfully!!!");
  });
};

//the function to delete a Club object!!!
exports.delete = function (req, res) {
  Club.findByIdAndRemove(req.params.id, function (error) {
    // Club is removed with reference to id
    res.send("Club removed successfully!!!");
  });
};
