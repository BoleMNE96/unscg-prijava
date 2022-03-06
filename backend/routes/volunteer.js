const express = require('express')

const volunteerController = require('../controllers/volunteer')

const router = express.Router()

router.post('/add-volunteer', volunteerController.AddVolunteer)
router.get('/get-volunteers', volunteerController.getAllVolunteers)
// router.get('/edit-volunteer/:volunteerId', volunteerController.editVolunteer)
// router.post('/delete-volunteer', volunteerController.deleteVolunteer)

module.exports = router
