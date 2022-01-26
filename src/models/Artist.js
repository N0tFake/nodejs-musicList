const { Model, DataTypes } = require('sequelize')

class Artist extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            date_origin: DataTypes.STRING
        },{
            sequelize,
            tableName: 'artists'
        })
    }

    static associate(models){
        this.belongsToMany(models.Album, { foreignKey: 'id_artist', through: 'artist_album', as: 'album'})
        this.belongsToMany(models.Music, { foreignKey: 'id_artist', through: 'artist_music', as: 'AutorMusic' })
    }
}

module.exports = Artist