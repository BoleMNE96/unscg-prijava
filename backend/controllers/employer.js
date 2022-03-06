const Employer = require('../models/employer')

exports.getAllEmployers = (req, res, next) => {
  Employer.find().then((employers) => {
    res.send(employers)
  })
}

exports.AddEmployer = (req, res, next) => {
  const companyName = req.body.companyName
  const fullRepName = req.body.fullRepName
  const repPosition = req.body.repPosition
  const pib = req.body.pib
  const phone = req.body.phone
  const email = req.body.email
  const jobs = req.body.jobs

  const employer = new Employer({
    companyName,
    fullRepName,
    repPosition,
    pib,
    phone,
    email,
    jobs,
  })

  employer
    .save()
    .then((result) => {
      console.log(result)
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err)
    })
}

// exports.editEmployer = (req, res, next) => {
//   const empId = req.params.employerId

//   Employer.findByPk(empId).then((employer) => {
//     if (!employer) {
//       res.redirect('/')
//     }
//     res.send(employer)
//   })
// }

// exports.deleteEmployer = (req, res, next) => {}
