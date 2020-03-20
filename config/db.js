const Sequelize = require('sequelize').Sequelize;
//const {Sequelize} = require('sequelize');

//database, username, password
let sequelize = new Sequelize('games', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//Promise
sequelize
    .authenticate()
    .then(() => {
        console.log('MySQL connection successful.');
    })
    .catch((err) => {
        console.error('MySQL connection error: ', err);
    });

module.exports = {
    //sequelize: sequelize
    sequelize
}