const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'qweasd123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;