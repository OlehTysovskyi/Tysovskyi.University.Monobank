const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserById } = require("../controllers/userController");
const { createCard, getUserCards, getCardById } = require("../controllers/cardController");
// const { googleAuthStart, googleAuthCallback } = require("../controllers/googleAuthController");

router.post("/api/register", registerUser);
router.post("/api/login", loginUser);
router.get("/api/get-user-by-id/:userId", getUserById);

router.post("/api/create-card", createCard);
router.get("/api/get-user-cards/:userId", getUserCards);
router.get("/api/get-card-by-id/:cardId", getCardById);

// router.get("/auth/google", googleAuthStart);
// router.get("/auth/google/callback", googleAuthCallback);

module.exports = router;
