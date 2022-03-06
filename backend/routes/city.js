const express = require('express')

const cityController = require('../controllers/city')

const router = express.Router()

router.get('/get-cities', cityController.getAllCities)

module.exports = router
