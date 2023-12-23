const Sequelize= require('sequelize');

const { initModels } = require("./models/init-models");

let path = 'postgres://postgres:postgres@localhost:5432/garden';

function getModels() {
    const sequelize = new Sequelize('garden', 'postgres', 'postgres', {
        host: 'localhost',
        dialect: 'postgres'
    });
    return initModels(sequelize);
}

module.exports = getModels;