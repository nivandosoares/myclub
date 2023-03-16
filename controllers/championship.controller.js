const Championship = require("../models/championship.model.js");
const match = require("../models/match.model.js");
const player = require("../models/player.model.js");

exports.list = async (req, res) => {
  try {
    const championships = await Championship.find({});
    res.json(championships);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.searchById = async (req, res) => {
  try {
    const championship = await Championship.findById(req.params.id);
    res.json(championship);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create = async (req, res) => {
  try {
    const newChampionship = new Championship(req.body);
    const championship = await newChampionship.save();
    res.json(championship);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  try {
    const championship = await Championship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(championship);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const championship = await Championship.findByIdAndRemove(req.params.id);
    res.json(championship);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.strikers = async (req, res) => {
  try {
    const championshipId = req.params.championshipId;
    
    const strikers = await match.aggregate([
      // Filtra apenas os jogos do campeonato desejado
      { $match: { "championshiṕ": mongoose.Types.ObjectId(championshipId) } },
      
      // Agrupa os jogadores e soma os gols
      { $group: { _id: "$team1.club.players", gols: { $sum: "$team1.gols" } } },
      { $group: { _id: "$_id", gols: { $sum: "$gols" } } },
      
      // Junta a informação do jogador
      { $lookup: { from: "players", localField: "_id", foreignField: "_id", as: "player" } },
      { $unwind: "$player" },
      
      // Ordena pelo número de gols em ordem decrescente
      { $sort: { gols: -1 } },
      
      // Seleciona apenas o nome do jogador e o número de gols
      { $project: { nome: "$player.nome", gols: 1 } }
    ]);
    
    res.json(strikers);
  } catch (err) {
    res.status(500).send(err);
  }
};
