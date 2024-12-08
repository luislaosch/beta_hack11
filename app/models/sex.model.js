const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Sex = sequelize.define("sex",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description:{
            type: DataType.STRING
        }
    })
    return Sex;
}