const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
// Importando Modelos
const Artist = require('../models/artist')
const Genre = require('../models/genre')
const Album = require('../models/album')
const Music = require('../models/music')
const { user } = require('pg/lib/defaults')
//
const connection = new Sequelize(dbConfig)

// Iniciando os modelos
Artist.init(connection)
Genre.init(connection)
Album.init(connection)
Music.init(connection)
//

// Iniciando associações

module.exports = connection