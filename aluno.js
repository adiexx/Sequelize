const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const database = require('./db');

const Aluno = database.define('Aluno', {
    ID: {
        type: sequelize.STRING,
        allownNull: true,
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
