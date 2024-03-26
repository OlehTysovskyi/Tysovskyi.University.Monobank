require("../controllers/googleAuthController");

const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  registerUser,
  loginUser,
  getUserById,
} = require("../controllers/userController");
const {
  createCard,
  getUserCards,
  getCardById,
} = require("../controllers/cardController");
const { isLoggedIn } = require("../utils/loginUtil");
const { createTransfer } = require("../controllers/transferController");

router.post("/api/register", registerUser);
router.post("/api/login", loginUser);
router.get("/api/get-user-by-id/:userId", getUserById);

router.post("/api/create-card", createCard);
router.get("/api/get-user-cards/:userId", getUserCards);
router.get("/api/get-card-by-id/:cardId", getCardById);

router.post("/api/create-transfer", createTransfer);

router.get(
  "/auth/google",
  passport.authenticate("google-auth", { scope: ["email", "profile"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google-auth", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
    session: true,
  })
);

router.get("/profile", isLoggedIn, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
