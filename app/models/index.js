const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize =  sequelize;

db.user = require('./user.models')(sequelize,Sequelize);

db.nationality = require('./nationality.model')(sequelize,Sequelize);
db.ubigeo= require('./ubigeo.model')(sequelize,Sequelize);
db.customer = require('./customer.model')(sequelize,Sequelize);

db.vaccine = require('./vaccine.model')(sequelize,Sequelize);
db.sex= require('./sex.model')(sequelize,Sequelize);
db.race = require('./race.model')(sequelize,Sequelize);
db.species = require('./species.model')(sequelize,Sequelize);
db.pet= require('./pet.model')(sequelize,Sequelize);







module.exports = db;