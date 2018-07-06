const Sequelize = require('sequelize');
const config = require('./config.js')
const sequelize = new Sequelize(config.DATABASE, config.USER, config.PASSWD, {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  },
  info: {
    type: Sequelize.TEXT
  }
});

User.sync()

module.exports.sequelize = sequelize
module.exports.User = User