const club = require("../models/club.model.js");

// Obtém todos os clubs
exports.list = async (req, res) => {
  try {
    const clubs = await club.find({});
    res.json(clubs);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtém um club específico por ID
exports.searchById = async (req, res) => {
  try {
    const club = await club.findById(req.params.id);
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Adiciona um novo club
exports.create = async (req, res) => {
  try {
    const novoclub = new club(req.body);
    const club = await novoclub.save();
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Atualiza um club existente por ID
exports.update = async (req, res) => {
  try {
    const club = await club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exclui um club existente por ID
exports.delete = async (req, res) => {
  try {
    const club = await club.findByIdAndRemove(req.params.id);
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};
