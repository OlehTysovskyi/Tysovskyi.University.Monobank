const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Account = require("./accounts");

const Transaction = sequelize.define(
  "Transaction",
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sender_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Account,
        key: "account_id",
      },
    },
    receiver_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Account,
        key: "account_id",
      },
    },
    transaction_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "Transactions",
    getterMethods: {
      getSenderAccountId() {
        return this.getDataValue("sender_account_id");
      },
      getReceiverAccountId() {
        return this.getDataValue("receiver_account_id");
      },
      getTransactionType() {
        return this.getDataValue("transaction_type");
      },
      getTransactionAmount() {
        return this.getDataValue("amount");
      },
      getTransactionDate() {
        return this.getDataValue("date");
      },
    },
  }
);

module.exports = Transaction;
