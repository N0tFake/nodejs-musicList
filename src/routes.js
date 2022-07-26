const express = require('express')
const { route } = require('express/lib/application')

// Controllers 
const AlbumController = require('./controllers/AlbumController')
const ArtistController = require('./controllers/ArtistController')
const GenreController = require('./controllers/GenreController')
const MusicController = require('./controllers/MusicController')
//

const routes = express.Router()

// Rotas - Artist
routes.get('/artist', ArtistController.index)
routes.post('/artist', ArtistController.store)
routes.put('/artist/:id_artist', ArtistController.update)
routes.delete('/artist/:id_artist', ArtistController.delete)
//

// Rotas - Album
routes.get('/album', AlbumController.index)
routes.post('/artist/:id_artist/album', AlbumController.store)
routes.delete('/album/:album_id', AlbumController.delete)
//

// Rotas - Genre
routes.get('/genre', GenreController.index)
routes.post('/genre', GenreController.store)
//

// Rotas - Music
routes.get('/music', MusicController.index)
routes.post('/artist/:id_artist/music', MusicController.store)
routes.delete('/music/:music_id', MusicController.delete)
//

module.exports = routes