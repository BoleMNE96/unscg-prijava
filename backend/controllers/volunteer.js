const Volunteer = require('../models/volunteer')

exports.getAllVolunteers = (req, res, next) => {
  Volunteer.find()
    .populate('city')
    .populate('school', 'school_name')
    .populate('course', 'course_name')
    .then((volunteers) => {
      res.send(volunteers)
    })
}

exports.AddVolunteer = (req, res, next) => {
  const fullName = req.body.fullName
  const email = req.body.email
  const jmbg = req.body.jmbg
  const phone = req.body.phone
  const city = req.body.city
  const school = req.body.school
  const course = req.body.course

  const volunteer = new Volunteer({
    fullName,
    email,
    jmbg,
    phone,
    city,
    school,
    course,
  })

  volunteer
    .save()
    .then((result) => {
      console.log(result)
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err)
    })
}

// exports.editVolunteer = (req, res, next) => {
//   const vtrId = req.params.volunteerId

//   Volunteer.findByPk(vtrId).then((volunteer) => {
//     if (!volunteer) {
//       res.redirect('/')
//     }
//     res.send(volunteer)
//   })
// }

// exports.deleteVolunteer = (req, res, next) => {}
