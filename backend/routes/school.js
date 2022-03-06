const express = require('express')

const schoolController = require('../controllers/school')

const router = express.Router()

router.get('/get-schools', schoolController.getAllSchools)
router.get('/get-schools/:cityId', schoolController.getCitySchools)

module.exports = router
