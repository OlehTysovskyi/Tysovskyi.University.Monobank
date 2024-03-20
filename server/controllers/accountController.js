const Account = require("../models/accounts");

async function createAccount(req, res) {
  const { user_id, account_type, balance } = req.body;

  let account_number;
  let unique = false;
  const cardLength = 16;
  const characters = "0123456789";

  while (!unique) {
    account_number = "";
    for (let i = 0; i < cardLength; i++) {
      account_number += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    const existingAccount = await Account.findOne({
      where: { account_number },
    });
    if (!existingAccount) {
      unique = true;
    }
  }

  try {
    const account = await Account.create({
      user_id,
      account_number,
      account_type,
      balance,
    });
    res.status(201).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while creating account" });
  }
}

async function getAccount(req, res) {
  const accountId = req.params.id;

  try {
    const account = await Account.findByPk(accountId);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while getting info about account" });
  }
}

async function updateAccount(req, res) {
  const accountId = req.params.id;
  const { account_type, balance } = req.body;

  try {
    const account = await Account.findByPk(accountId);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    await account.update({ account_type, balance });
    res.status(200).json({ message: "Account info updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error while updating info about account" });
  }
}

const getUserAccounts = async (req, res) => {
  const userId = req.params.userId;

  try {
    const accounts = await Account.findAll({ where: { user_id: userId } });
    res.json(accounts);
  } catch (error) {
    console.error("Error while fetching user accounts:", error);
    res.status(500).json({ error: "Error while fetching user accounts" });
  }
};

const getAccountBalance = async (req, res) => {
  const accountId = req.params.accountId;

  try {
    const account = await Account.findOne({
      where: { account_id: accountId },
    });

    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }

    const balance = account.balance;

    console.error("=============", account.balance, "================");

    res.json({ balance });
  } catch (error) {
    console.error("Error while fetching user accounts:", error);
    res.status(500).json({ error: "Error while fetching user accounts" });
  }
};

module.exports = {
  createAccount,
  getAccount,
  updateAccount,
  getUserAccounts,
  getAccountBalance,
};
