const match = require("../models/match.model.js");

exports.test = function (req, res) {
  res.send("Looks quite good!!!");
}; //the basic testing querry!!!

exports.search = function (req, res) {
  match.find({ position: req.params.club }, function (error, matches) {
    if (error) return error;
    res.json(matches); //the collection is the output
  });
  //searches match by specific position
};

//the function to create a new match object!!!
exports.create = function (req, res) {
  let match = new match({
    homeTeam: req.body.homeTeam,
    awayTeam: req.body.awayTeam,
    date: req.body.date,
    competition: req.body.competition,
    result: req.body.result,
  });

  match.save(function (error) {
    if (error) {
      return error;
    }
    res.send("match created successfully!!!");
  });
};

//the function to read a match object in json
exports.read = function (req, res) {
  //var idd="5c306ea8617f7d12101711c9";
  match.findById(req.params.id, function (error, product) {
    if (error) {
      return error;
    }

    res.send(product);
  });
};

//the function to update a match object!!!
exports.update = function (req, res) {
  match.findByIdAndUpdate(req.params.id, { $set: req.body }, function (error) {
    if (error) {
      return error;
    }
    res.send("match is updated successfully!!!");
  });
};

//the function to delete a match object!!!
exports.delete = function (req, res) {
  match.findByIdAndRemove(req.params.id, function (error) {
    // match is removed with reference to id
    res.send("match removed successfully!!!");
  });
};
