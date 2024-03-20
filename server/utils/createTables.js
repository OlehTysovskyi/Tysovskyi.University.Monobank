const { sequelize } = require("../config/database");
const Account = require("../models/accounts");


async function createTables() {
  try {
    await sequelize.sync();
    // await Account.update({ balance: 12053.52 }, { where: { account_id: 4 } });
    console.log("<-Tables created successfully.->");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

module.exports = createTables;
