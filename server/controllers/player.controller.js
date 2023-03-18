const Player = require("../models/player.model.js");

exports.home = (req, res) => {
  try {
    res.render("players", { title: "Jogadores" });
  } catch (error) {
    res.status(500).send({ message: error.message || "error ocurred" });
  }
};

// Obtém todos os jogadores
exports.list = async (req, res) => {
  try {
    const players = await Player.find({});
    res.json(players);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtém um jogador específico por ID
exports.searchById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      res.status(404).send("Player not found");
      return;
    }
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};
// Adiciona um novo jogador
exports.create = async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    const player = await newPlayer.save();
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Atualiza um jogador existente por ID
exports.update = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exclui um jogador existente por ID
exports.delete = async (req, res) => {
  try {
    const player = await Player.findByIdAndRemove(req.params.id);
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};
