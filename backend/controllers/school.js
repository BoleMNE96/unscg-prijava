const School = require('../models/school')

exports.getAllSchools = (req, res, next) => {
  School.find().then((schools) => {
    res.send(schools)
  })
}

exports.getCitySchools = (req, res, next) => {
  const ctId = req.params.cityId
  School.find({ city_id: ctId }, (err, docs) => {
    if (err) {
      console.log(err)
    } else {
      res.send(docs)
    }
  })
}
