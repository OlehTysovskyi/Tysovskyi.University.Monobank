const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUsernameById } = require("../controllers/userController");
const { createAccount, getUserAccounts, getAccountBalanceById } = require("../controllers/accountController");
// const { googleAuthStart, googleAuthCallback } = require("../controllers/googleAuthController");

router.post("/api/register", registerUser);
router.post("/api/login", loginUser);
router.get("/api/get-username-by-id/:userId", getUsernameById);

router.post("/api/create-account", createAccount);
router.get("/api/get-user-accounts/:userId", getUserAccounts);
router.get("/api/get-account-balance-by-id/:accountId", getAccountBalanceById);

// router.get("/auth/google", googleAuthStart);
// router.get("/auth/google/callback", googleAuthCallback);

module.exports = router;
