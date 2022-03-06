const User = require('../models/user')

exports.getAllUsers = (req, res, next) => {
  User.find().then((users) => {
    res.send(users)
  })
}
