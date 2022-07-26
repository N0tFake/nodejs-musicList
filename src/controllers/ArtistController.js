const Artist = require('../models/Artist')

module.exports = {
    async index(req, res){
        const artists = await Artist.findAll()

        return res.json(artists)
    },
    async store(req, res){
        const { name, date_origin } = req.body
    
        const artist = Artist.create({name, date_origin})

        return res.json({created: true})
    },
    async update(req, res){},
    async delete(req, res){},
}