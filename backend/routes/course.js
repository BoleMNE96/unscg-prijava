const express = require('express')

const courseController = require('../controllers/course')

const router = express.Router()

router.get('/get-courses', courseController.getAllCourses)
router.get('/get-courses/:schoolId', courseController.getSchoolCourses)

module.exports = router
