const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Vaccine = sequelize.define("vaccine",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description:{
            type: DataType.STRING
        },
    })
    return Vaccine;
}