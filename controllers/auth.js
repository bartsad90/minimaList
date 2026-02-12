const UserSchema = require('../models/user')
const bcrypt = require('bcryptjs')

// register()
const registerUser = async (req, res) => {
    try {
    const {name, email, password} = req.body

    if (!name) {
        throw new Error('Please provide name')
    }

    const emailExists = await UserSchema.findOne({email})? true : false
    if (!email || emailExists) {
        throw new Error('Wrong email.')
    }
    if (!password) {
        throw new Error('Please provide password')
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHashed = await bcrypt.hash(password, salt)
    const newUser = await UserSchema.create({name, email, password: passwordHashed})
    const token = newUser.createJWT()
    res.status(200).json({newUser, token})

    } catch {
        throw new Error('Something went wrong')
    }

}


// login
const login = async (req, res) => {
    //const {name, email, password} = req.body
    res.status(200).send('login user')
}

module.exports = {registerUser, login}