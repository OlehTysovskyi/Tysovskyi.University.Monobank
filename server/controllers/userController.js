const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/users");

router.use(express.json());

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, email, password_hash: hashedPassword });
    res.status(200).send({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error registering user" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    res.status(200).send({ message: "Login successful", userId: user.user_id });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error logging in" });
  }
};

const getUsernameById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findOne({ where: { user_id: userId } });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching user" });
  }
};

module.exports = { registerUser, loginUser, getUsernameById };
