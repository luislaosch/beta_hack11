const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const Customer = sequelize.define("customer",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            is: /^[0-9]+$/i,
            len: [8],
            },
        },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull defaults to true
        },
        home_adress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            is: /^[0-9]+$/i,
            },
        },
        is_active:{
            type:DataType.BOOLEAN
        }
    })
    return Customer;
}