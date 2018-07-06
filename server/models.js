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


  createUser: function(email, pwd) {
    db.User.create({
      email: email,
      password: bcrypt.hashSync(pwd)
    })
  }
}
