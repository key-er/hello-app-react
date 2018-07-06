const db = require('./database/index.js')
const bcrypt = require('bcrypt-nodejs')


module.exports = {

  validateUser: function(email, pwd, callback) {
    db.User.find({email: email}).then((data) => {
      var savedHash = data.password
      // compareSync returns true or false
      callback(bcrypt.compareSync(pwd, savedHash));
    })
  },


  createUser: function(email, pwd, callback) {
    db.User.create({
      email: email,
      password: bcrypt.hashSync(pwd)
    }).then((res) => {
      callback(null, res)
    }).catch((err) => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        callback('duplicate error', null)
      }
    })
  }
}

// for testing queries

// db.User.create({
//   email: 'abc@yahoo.com',
//   password: bcrypt.hashSync('asksd')
// }).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err.name === 'SequelizeUniqueConstraintError')
// })