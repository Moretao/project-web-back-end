const sequelize = require('sequelize');

const dbConfig = require("../config/database");

const connection = new sequelize(dbConfig);

const Client = require('../models/Client');
const Address = require('../models/Address');


Client.init(connection);
Address.init(connection);

Address.associate(connection.models);
Client.associate(connection.models);


try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}



module.exports = connection;