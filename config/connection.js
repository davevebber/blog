const Sequelize = require('sequelize');

// dotenv package to store sql user and password
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.BD_NAME, process.env.DB_USER,process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

    module.exports = sequelize;