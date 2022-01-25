const { Model, DataTypes } = require('sequelize')

class Genre extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING 
        },{
            sequelize,
            tableName: 'genre_musical'
        })
    }

    static associate(models){
        this.belongsToMany(models.Album, { foreignKey: 'id_genre', through: 'genre_associate' , as: 'genre' })
    }
}

module.exports = Genre