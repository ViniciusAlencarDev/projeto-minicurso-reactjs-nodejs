const Sequelize = require('sequelize');

const connection = new Sequelize('minicurso', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection