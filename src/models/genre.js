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
}

module.exports = Genre