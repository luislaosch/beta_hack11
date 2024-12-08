const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Pet = sequelize.define("pet",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ubigeo:{
            type: DataType.STRING
        },
        departament:{
            type: DataType.STRING
        },
        province:{
            type: DataType.STRING
        },
        district:{
            type: DataType.STRING
        },
        is_active:{
            type:DataType.BOOLEAN
        }
    })
    return Pet;
}