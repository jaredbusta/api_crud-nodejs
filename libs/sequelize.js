const { Sequelize } = require('sequelize');
const  {config} = require('./../config/config');

const  setupModels = require('./../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// const URI =`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// dialect:'postgres',
const URI =`mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const sequelize = new Sequelize(URI,{
    dialect:'mysql',
    logging:config.dbLoggin
});

setupModels(sequelize);
//sequelize.sync(); // crea la estructura de los modelos y construye las tablas en la BD
module.exports = sequelize;