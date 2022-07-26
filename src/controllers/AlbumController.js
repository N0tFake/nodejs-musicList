const Album = require('../models/Album')
const Artist = require('../models/Artist')
const Genre = require('../models/Genre')

module.exports = {
    async index(req, res){
        const album = await Album.findAll()

        return res.json(album)
    },
    async store(req, res){
        const { id_artist } = req.params 
        const { name, release, genre } = req.body

        const artist = await Artist.findByPk(id_artist)
        if(!artist) return res.status(400).json({error: "Artist not found!!"})

        const [genre_music, created] = await Genre.findOrCreate({
            where: { name: genre },
        })

        if(!created && !genre_music) return res.status(400).json({error: "Genre not created!!"})

        const album = await Album.create({
            name,
            release,
        })

        await artist.addAlbum(album)
        await genre_music.addGenre(album)

        return res.json(album)

    },
    async delete(req, res){}
}