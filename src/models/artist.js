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
}