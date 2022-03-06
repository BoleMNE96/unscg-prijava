const Course = require('../models/course')

exports.getAllCourses = (req, res, next) => {
  Course.find().then((course) => {
    res.send(course)
  })
}

exports.getSchoolCourses = (req, res, next) => {
  const scId = req.params.schoolId
  Course.find({ school_id: scId }, (err, docs) => {
    if (err) {
      console.log(err)
    } else {
      res.send(docs)
    }
  })
}
