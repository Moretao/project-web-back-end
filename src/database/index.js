const sequelize = require('sequelize');

const dbConfig = require("../config/database");

const connection = new sequelize(dbConfig);

try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}



module.exports = connection;