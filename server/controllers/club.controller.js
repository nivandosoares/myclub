const Club = require("../models/club.model.js");

exports.home = async (req, res) => {
  try {
    clubs = await Club.find({});
    res.render("clubs", { title: "Clubes", clubs: clubs });
  } catch (err) {
    res.render("500", { title: "Erro interno do servidor" });
  }
};

//renderiza a página do formulário
exports.submitClub = async (req, res) => {
  try {
    const infoErrorsObj = req.flash("infoErrors");
    const infoSubmitObj = req.flash("infoSubmit");
    res.render("create-club", {
      title: "Cadastrar Time",
      infoErrorsObj,
      infoSubmitObj,
    });
  } catch (err) {
    res.render("500", { title: "Erro interno do servidor" });
  }
};
//POST do formulário

exports.submitClubOnPost = async (req, res) => {
  try {
    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("No Files where uploaded.");
    } else {
      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath =
        require("path").resolve("./") + "/public/uploads/" + newImageName;

      imageUploadFile.mv(uploadPath, function (err) {
        if (err) return res.satus(500).send(err);
      });
    }

    const newClub = new Club({
      name: req.body.name,
      city: req.body.city,
      image: newImageName,
    });

    await newClub.save();

    req.flash("infoSubmit", "O clube foi criado com sucesso.");
    res.redirect("/clubs/create");
  } catch (error) {
    // res.json(error);
    req.flash("infoErrors", error);
    res.redirect("/clubs/create");
  }
};

// Obtém todos os clubes
exports.list = async (req, res) => {
  try {
    const clubs = await Club.find({});
    res.json(clubs);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Obtém um clube específico por ID
exports.searchById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) {
      res.status(404).send("Club not found");
      return;
    }
    res.render("club", { title: club.name, club: club });
  } catch (err) {
    res.send("500");
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
    });
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exclui um clube existente por ID
exports.delete = async (req, res) => {
  try {
    const club = await Club.findByIdAndRemove(req.params.id);
    if (!club) {
      res.status(404).send("Club not found");
      return;
    }
    res.json(club);
  } catch (err) {
    res.status(500).send(err);
  }
};
