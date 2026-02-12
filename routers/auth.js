const express = require('express')
const authRouter = express.Router()
const {registerUser, login} = require('../controllers/auth')
const authenticateUser = require('../middleware/auth')

authRouter.route('/register').post(registerUser)
authRouter.route('/login').post(login)

module.exports = authRouter