const { sequelize } = require(".");

module.exports= (sequelize, DataType)=>{
    const User = sequelize.define("user",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        is_active:{
            type:DataType.BOOLEAN
        }
    })
    return User;
}