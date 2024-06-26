const { Sequelize } = require('sequelize');
const tedious = require('tedious');

// TODO: Move sensitive data into .env file
// ANTILAB 2: MOVE SENSITIVE DATA INTO .ENV FILE
const sequelize = new Sequelize('monobank', 'tysyk-monobank', 'A2s4D6f8', {
    host: 'monobank.database.windows.net',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
            driver: tedious,
        },
    },
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('<-Connected to database successfully.->');
    } catch (error) {
        console.error('!-Error while connecting to database:', error);
    }
}

module.exports = {
    sequelize,
    testConnection,
};
