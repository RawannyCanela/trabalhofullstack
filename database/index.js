const Sequelize = require('sequelize')
const config = require('../config/DataBase')

const Cadastro = require('../models/Cadastro')

const connection = new Sequelize(config)

module.exports = connection;