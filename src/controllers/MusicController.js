const Album = require('../models/Album')
const Artist = require('../models/Artist')
const Genre = require('../models/Genre')
const Music = require('../models/Music')

module.exports = {
    async index(req, res){
        const musics = await Music.findAll()
        return res.json(musics)
    },
    async store(req, res){
        const { id_artist } = req.params
        const { name, release, id_album, genre } = req.body

        const artist = await Artist.findByPk(id_artist)
        if (!artist) return res.status(400).json({error: "Artist not found"})

        const album = await Album.findByPk(id_album)
        if (!album) return res.status(400).json({error: "Album not found"})
7
        const [music_genre, created] = await Genre.findOrCreate({
            where: { name: genre}
        })
        if (!created && !music_genre) return res.status(400).json({error: "Genre not created"})

        const exist = await Music.findOne({
            where: { name: name }
        })

        if (exist) return res.status(400).json({error: "Music already exists"}) 

        const music = await Music.create({
            name,
            release
        })

        await artist.addAutorMusic(music)
        await album.addMusicAlbum(music)
        await music_genre.addMusicGenre(music)

        return res.json(music)

    },
    async delete(req, res){},
}