const UserSchema = require('../models/user')
const bcrypt = require('bcryptjs')
const {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
} = require('../errors/index')
const { StatusCodes } = require('http-status-codes')

// register()
const registerUser = async (req, res) => {

    const {name, email, password} = req.body

    if (!name) {
        throw new BadRequestError('Provide user name')
    }

    const emailExists = await UserSchema.findOne({email})? true : false
    if (!email || emailExists) {
        throw new BadRequestError('Provide valid email')
    }
    if (!password) {
        throw new BadRequestError('Provide password')
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHashed = await bcrypt.hash(password, salt)
    const newUser = await UserSchema.create({name, email, password: passwordHashed})
    const token = await newUser.createJWT()
    res.status(200).json({newUser, token})
}


// login
const login = async (req, res) => {
    const {name, password} = req.body

    if (!name || !password) {
        throw new BadRequestError('Please provide name and password')
    }

    const user = await UserSchema.findOne({name})
    const isPasswordCorrect = user.compare(password)
    
    if (!user || !isPasswordCorrect) {
        throw new UnauthorizedError('Invalid user name or password')
    }
    
    const token = user.createJWT()

    //const {name, email, password} = req.body
    res.status(200).json({user, token})
}

module.exports = {registerUser, login}