const match = require("../models/match.model.js");

// Obtém todas as matchs
exports.list = async (req, res) => {
  try {
    const matchs = await match.find({});
    res.json(matchs);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtém uma match específica por ID
exports.searchById = async (req, res) => {
  try {
    const match = await match.findById(req.params.id);
    res.json(match);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Adiciona uma nova match
exports.create = async (req, res) => {
  try {
    const novamatch = new match(req.body);
    const match = await novamatch.save();
    res.json(match);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Atualiza uma match existente por ID
exports.update = async (req, res) => {
  try {
    const match = await match.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(match);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exclui uma match existente por ID
exports.delete = async (req, res) => {
  try {
    const match = await match.findByIdAndRemove(req.params.id);
    res.json(match);
  } catch (err) {
    res.status(500).send(err);
  }
};
