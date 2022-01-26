const { Model, DataTypes } = require('sequelize')

class Music extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            release: DataTypes.STRING
        },{
            sequelize,
            tableName: 'musics'
        })
    }

    static associate(models){
        this.belongsToMany(models.Artist, { foreignKey: 'id_music', through: 'artist_music', as: 'Autor' })
        this.belongsToMany(models.Genre, { foreignKey: 'id_music', through: 'genre_music', as: 'GenreMusic' })
        this.belongsToMany(models.Album, { foreignKey: 'id_music', through: 'album_music', as: 'AlbumMusic' })
        
    }

}

module.exports = Music