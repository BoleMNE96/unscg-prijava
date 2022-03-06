const express = require('express')

const employerController = require('../controllers/employer')

const router = express.Router()

router.post('/add-employer', employerController.AddEmployer)
router.get('/get-employers', employerController.getAllEmployers)
// router.get('/edit-employer/:employerId', employerController.editEmployer)
// router.post('/delete-employer', employerController.deleteEmployer)

module.exports = router
