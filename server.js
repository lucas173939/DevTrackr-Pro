const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/devtrackr");

const User = mongoose.model("User", {
  name: String,
  username: String,
  followers: Number
});

app.post("/login", (req, res) => {
  const token = jwt.sign({ user: "admin" }, "secret", { expiresIn: "1d" });
  res.json({ token });
});

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401);
  try {
    jwt.verify(token, "secret");
    next();
  } catch {
    return res.sendStatus(401);
  }
};

app.post("/users", auth, async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.get("/users", auth, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3001, () => console.log("Backend rodando"));
