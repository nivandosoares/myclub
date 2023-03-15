const player = require("../models/player.model.js");

// Obtém todos os playeres
exports.list = async (req, res) => {
  try {
    const players = await player.find({});
    res.json(players);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtém um player específico por ID
exports.searchById = async (req, res) => {
  try {
    const player = await player.findById(req.params.id);
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Adiciona um novo player
exports.create = async (req, res) => {
  try {
    const novoplayer = new player(req.body);
    const player = await novoplayer.save();
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Atualiza um player existente por ID
exports.update = async (req, res) => {
  try {
    const player = await player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exclui um player existente por ID
exports.delete = async (req, res) => {
  try {
    const player = await player.findByIdAndRemove(req.params.id);
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};
