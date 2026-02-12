const UserSchema = require('../models/user')

// register()
const registerUser = async (req, res) => {
    //const {name, email, password} = req.body
    res.status(200).send('register user')
}


// login
const login = async (req, res) => {
    //const {name, email, password} = req.body
    res.status(200).send('login user')
}

module.exports = {registerUser, login}