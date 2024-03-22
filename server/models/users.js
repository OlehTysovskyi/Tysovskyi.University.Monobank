const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    google_credentials: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Users",
    getterMethods: {
      getUsername() {
        return this.getDataValue("username");
      },
      getEmail() {
        return this.getDataValue("email");
      },
      getGoogleCredentials() {
        return this.getDataValue("google_credentials");
      },
    },
  }
);

module.exports = User;
