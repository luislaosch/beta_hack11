const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Species = sequelize.define("species",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description:{
            type: DataType.STRING
        },
        is_active:{
            type:DataType.BOOLEAN
        }
    })
    return Species;
}