const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db');

const Model = Sequelize.Model;

class Game extends Model {};

//CREATE TABLE games (name VARCHAR(255) NOT NULL);
Game.init({
    //id
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //createdAt
    //updatedAt
}, {
    sequelize,
    modelName: 'game',

    //Set a custom table name
    // freezeTableName: true,
    // tableName: 'games'
});

// Game.sync();

module.exports = {Game};