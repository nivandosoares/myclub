const User = require("../models/user.model");

exports.signup = async (req, res) => {
  res.render("signup");
};

exports.registerOnPost = async (req, res) => {
  const { name, password } = req.body;
  const user = new User({ name, password });
  try {
    await user.save();
    res.redirect("/user/login");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};
exports.dashboard = async (req, res) => {
  res.render("dashboard", { title: "Dashboard", user: req.session.user });
};

exports.login = async (req, res) => {
  try {
    res.render("login", { title: "Login" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "error occurred" });
  }
};

exports.postLogin = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name: name });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).send("Wrong password");
    }

    req.session.user = user;
    res.redirect("/user/dashboard");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};
