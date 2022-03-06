const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()

router.get('/get-users', userController.getAllUsers)

module.exports = router
