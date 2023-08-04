const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const database = require('./db');

const Aluno = database.define('Aluno', {
    ID: {
        type: sequelize.STRING,
        allownNull: false,
        primaryKey: true
    },
    CPF: {
        type: Sequelize.INTEGER,
        allownNull: false,

    },
    Nome: {
        type: Sequelize.STRING,
        allownNull: false
    },
    Idade: {
        type: Sequelize.INTEGER,
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

module.exports = Aluno;
