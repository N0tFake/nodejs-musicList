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
        this.belongsTo(models.Artist, { foreignKey: 'id_artist', as: 'artist' })
        this.belongsTo(models.Genre, { foreignKey: 'id_genre', as: 'genre'})
    }

}

module.exports = Album