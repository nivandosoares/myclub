const Club = require("../models/club.model.js");

// Obtém todos os clubes
exports.list = async (req, res) => {
  try {
    const clubs = await Club.find({})
      .populate("players")
      .populate("history.championship");
    res.json(clubs);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtém um clube específico por ID
exports.searchById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id)
      .populate("players")
      .populate("history.championship");
    if (!club) {
      res.status(404).send("Club not found");
      return;
    }
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Adiciona um novo clube
exports.create = async (req, res) => {
  try {
    const newClub = new Club(req.body);
    const club = await newClub.save();
    res.json(club);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send(err.message);
    } else {
      console.error(err);
      res.status(500).send("Internal server error");
    }
  }
};

// Atualiza um clube existente por ID
exports.update = async (req, res) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate("players")
      .populate("history.championship");
    if (!club) {
      res.status(404).send("Club not found");
      return;
    }
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exclui um clube existente por ID
exports.delete = async (req, res) => {
  try {
    const club = await Club.findByIdAndRemove(req.params.id)
      .populate("players")
      .populate("history.championship");
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};
