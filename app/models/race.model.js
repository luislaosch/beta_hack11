const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Race = sequelize.define("race",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        destription:{
            type: DataType.STRING
        },
        is_active:{
            type:DataType.BOOLEAN
        }
    })
    return Race;
}