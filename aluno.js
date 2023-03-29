const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('Aluno', {
    CPF: {
        type: Sequelize.INTEGER,
        allownNull: false,
        primaryKey: True
    },
    Nome: {
        type: Sequelize.STRING,
        allownNull: false
    },
    Nota1: {
        type: Sequelize.FLOAT,
    },
    Nota2: {
        type: Sequelize.FLOAT,
    },
    Media:{
        type: Sequelize.FLOAT,
    }


})

module.exports = aluno;
