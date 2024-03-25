const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Transfer = sequelize.define(
  "Transfer",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sender_card_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipient_card_num: {
      type: DataTypes.INTEGER,
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
    tableName: "Transfers",
  }
);

module.exports = Transfer;
