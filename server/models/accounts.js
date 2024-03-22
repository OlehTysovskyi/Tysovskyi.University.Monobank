const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const User = require("./users");

const Account = sequelize.define(
  "Account",
  {
    account_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
    },
    account_number: {
      type: DataTypes.STRING,
      validate: {
        len: [16, 16],
      },
      unique: true,
    },
    account_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
    },
  },
  {
    tableName: "Accounts",
    getterMethods: {
      getUserId() {
        return this.getDataValue("user_id");
      },
      getAccountNumber() {
        return this.getDataValue("account_number");
      },
      getAccountType() {
        return this.getDataValue("account_type");
      },
      getAccountBalance() {
        return this.getDataValue("balance");
      },
    },
  }
);

module.exports = Account;
