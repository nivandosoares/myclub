const championship = require("../models/championship.model.js");

// Obtém todos os championships
exports.list = async (req, res) => {
  try {
    const championships = await championship.find({});
    res.json(championships);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtém um championship específico por ID
exports.searchById = async (req, res) => {
  try {
    const championship = await championship.findById(req.params.id);
    res.json(championship);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Adiciona um novo championship
exports.create = async (req, res) => {
  try {
    const novochampionship = new championship(req.body);
    const championship = await novochampionship.save();
    res.json(championship);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Atualiza um championship existente por ID
exports.update = async (req, res) => {
  try {
    const championship = await championship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(championship);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exclui um championship existente por ID
exports.delete = async (req, res) => {
  try {
    const championship = await championship.findByIdAndRemove(req.params.id);
    res.json(championship);
  } catch (err) {
    res.status(500).send(err);
  }
};
