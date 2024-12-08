const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Customer = sequelize.define("customer",{
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
    return Customer;
}