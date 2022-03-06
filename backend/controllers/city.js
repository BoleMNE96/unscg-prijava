const City = require('../models/city')

exports.getAllCities = (req, res, next) => {
  City.find().then((cities) => {
    res.send(cities)
  })
}
