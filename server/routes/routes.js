const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUsernameById } = require("../controllers/userController");
const { createAccount, getUserAccounts, getAccountBalance } = require("../controllers/accountController");
// const { googleAuthStart, googleAuthCallback } = require("../controllers/googleAuthController");

router.post("/api/register", registerUser);
router.post("/api/login", loginUser);
router.get("/api/users/:userId", getUsernameById);

router.post("/api/create-account", createAccount);
router.get("/api/get-user-accounts/:userId", getUserAccounts);
router.get("/api/get-account-balance/:accountId", getAccountBalance);

// router.get("/auth/google", googleAuthStart);
// router.get("/auth/google/callback", googleAuthCallback);

module.exports = router;
