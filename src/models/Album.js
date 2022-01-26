const { Model, DataTypes } = require('sequelize')

class Album extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            release: DataTypes.STRING,
            /* id_genre: DataTypes.INTEGER,
            id_artist: DataTypes.INTEGER */
        },{
            sequelize,
            tableName: 'albuns'
        })
    }

    static associate(models){
        /* this.belongsTo(models.Artist, { foreignKey: 'id_artist', as: 'artist' })
        this.belongsTo(models.Genre, { foreignKey: 'id_genre', as: 'genre'}) */

        /* this.hasOne(models.Artist, { foreignKey: 'id_artist', as: 'artist' })
        this.hasOne(models.Artist, { foreignKey: 'id_genre', as: 'genre' }) */

        this.belongsToMany(models.Artist, { foreignKey: 'id_album', through: 'artist_album', as: 'artista' })
        this.belongsToMany(models.Genre, { foreignKey: 'id_album',  through: 'genre_associate', as: 'genre'})
        this.belongsToMany(models.Music, { foreignKey: 'id_album', through: 'album_music', as: 'MusicAlbum' })
    }

}

module.exports = Album