const { Model, DataTypes } = require('sequelize')

class Album extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            release: DataTypes.STRING
        },{
            sequelize,
            tableName: 'albuns'
        })
    }
}

module.exports = Album