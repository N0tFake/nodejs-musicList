const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

// Modelos
//

const connection = new Sequelize(dbConfig)

module.exports = connection