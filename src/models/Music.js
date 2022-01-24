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
}

module.exports = Music