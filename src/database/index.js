const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
// Importando Modelos
const Artist = require('../models/Artist')
const Genre = require('../models/Genre')
const Album = require('../models/Album')
const Music = require('../models/Music')
//

const connection = new Sequelize(dbConfig)

// Iniciando os modelos
Artist.init(connection)
Genre.init(connection)
Album.init(connection)
Music.init(connection)
//

// Iniciando associações
//Album.associate(connection.models)
//
module.exports = connection