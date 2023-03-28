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
        type: Sequelize.INTEGER,
        allownNull: false
    },
    nota1: {
        type: Sequelize.INTEGER,
        allownNull: false
    },
    nota2: {
        type: Sequelize.INTEGER,
        allownNull: false
    }


})